import React from 'react'
import "./widgetSm.css"
import {Visibility} from "@material-ui/icons"
import { useState } from 'react'
import { useEffect } from 'react'
import {userRequest} from "../../requestMethods"

export default function WidgetSm() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    const getUsers = async ()=>{
      try {
      const res = await userRequest.get("users/?new=true")
      setUsers(res.data)
    }catch{}
   }
   getUsers()
  }, [])

  // users.map((u) => (
  //   console.log(u.img)
  // ))  
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Joined Members</span>
      <ul className="widgetSmList">

        {users.map((user) => (     
          
          <li className="widgetSmListItem" key={user._id}>
            <img src={user.img ? user.img : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" } alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className='widgetSmIcon'/>
              Display
            </button>
          </li>
         ))}

      </ul>
    </div>
  )
}
