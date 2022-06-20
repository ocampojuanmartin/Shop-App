import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./product.css"
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish, RestaurantMenuSharp } from "@material-ui/icons"
import {useSelector} from "react-redux"
import { useState } from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { userRequest } from "../../requestMethods"

export default function Product() {
    const location = useLocation()
    const productId= location.pathname.split("/")[2]
    const [pStats, setPStats] = useState([]) //pStats should be the data property in the chart below but the route is not working for now

    const product = useSelector((state) => state.product.products.find((product)=> product._id === productId))

    const MONTHS = useMemo(
        () => [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        []
    )

    useEffect(() => {
        const getStats = async () => {
            try{
                const res = await userRequest.get("orders/income?pid=" + productId)
                const list = res.data.sort((a,b)=> {
                    return a._id - b._id
                })
                list.map((item) => 
                  setPStats((prev) =>[
                    ...prev,
                    { name: MONTHS[item._id - 1], Sales: item.total},
                  ])
                  )
            }catch(err){
                console.log(err)
            }
        }
        getStats()
    },[productId, MONTHS])

  return (
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
        <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
             <Chart data={productData} dataKey="Sales" title="Sales Performance"/>  {/*data should be pStats but the route is not working so ill leave it hardcoded for now */}
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
                <img src={product.img} alt="" className="productInfoImg" />
                <span className="productName">{product.title}</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">{product._id}</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">sales:</span>
                    <span className="productInfoValue">1234</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">in stock:</span>
                    <span className="productInfoValue">{product.inStock}</span>
                </div>
            </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
            <div className="productFormLeft">
                <label> Product Name</label>
                <input type="text" placeholder={product.title} />

                <label> Description</label>
                <input type="text" placeholder={product.description} />

                <label> Price</label>
                <input type="text" placeholder={product.price} />

                <label>In Stock</label>
                <select name='inStock' id='idStock'>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>

            </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <img src={product.img} alt="" className="productUploadImg" />
                    <label for="file">
                        <Publish className='icon'/>
                    </label>
                    <input type="file" id="file" style={{display:"none"}}/>
                </div>
                <button className="productButton">Update</button>
            </div>
        </form>
      </div>
    </div>
  )
}
