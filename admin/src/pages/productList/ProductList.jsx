import React from 'react'
import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react';
import { deleteProduct, getProducts } from '../../redux/apiCalls';


export default function ProductList() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products)

    useEffect(() => {
      getProducts(dispatch)
    },[dispatch])

    const handleDelete = (id)=> {
      deleteProduct(id, dispatch)
      }

      const columns = [
        { field: "_id", headerName: 'ID', width: 300 },
        { field: 'product', headerName: 'Product', width: 300, renderCell: (params)=>{
          return (
            <div className='productListIem'>
              <img className= "productListImg" src={params.row.img} alt=""/>
              {params.row.title}
            </div>
          )
        } },
        { field: 'inStock', headerName: 'Stock', width: 230 },
        { field: 'price', headerName: 'Price', width: 200,},
        { field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
          return (
            <>
              <Link to={"/product/" + params.row._id}>
              <button className='productListEdit'>Edit</button>
              </Link>
              
              <DeleteOutline className='productListDelete' onClick={()=>handleDelete(params.row._id)}/>
            </>
          )
        }},
      ];

  return (
    <div className='productList'>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={9}
        checkboxSelection
      />
    </div>
  )
}
