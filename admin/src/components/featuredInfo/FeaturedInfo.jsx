import "./featuredInfo.css"
import React from "react"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import { useState } from "react"
import { useEffect } from "react"
import { userRequest } from "../../requestMethods"


export default function FeaturedInfo() {
  const [income, setIncome] = useState([])

  useEffect(()=>{
    const getIncome = async ()=>{
      try{
        const res = await userRequest.get("orders/income")
        setIncome(res.data)
      }catch {}
    }
    getIncome()
  },[])

  // THIS PART WILL BE HARDCODED FOR NOW DUE TO PROBLEMS IN THE ROUTE ".../orders/income"
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney"> $2,415</span>
            <span className="featuredMoneyRate">
                -11.4 <ArrowDownward className="featuredIcon negative"/>
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney"> $4,415</span>
            <span className="featuredMoneyRate">
                -1.4 <ArrowDownward className="featuredIcon negative"/>
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney"> $2,115</span>
            <span className="featuredMoneyRate">
                +2.4 <ArrowUpward className="featuredIcon"/>
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}
