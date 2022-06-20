import React from 'react'
import "./user.css"
import { CalendarToday, LocationOn, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import {Link} from "react-router-dom"
export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
                <button className="userAddButton">Create</button>
            </Link>
            
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://offradranch.com/images/sports/cameron-hanes-8211-bio-wife-family-age-net-worth-height.jpg" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Cameron Hanes</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon' />
                        <span className="userShowInfoTitle">cam82</span>
                    </div>

                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon' />
                        <span className="userShowInfoTitle">13.09.82</span>
                    </div>

                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon' />
                        <span className="userShowInfoTitle">+ 1 123 456 67</span>
                    </div>

                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon' />
                        <span className="userShowInfoTitle">camhanes@gmail.com</span>
                    </div>

                    <div className="userShowInfo">
                        <LocationOn className='userShowIcon' />
                        <span className="userShowInfoTitle">Florida | USA</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text"
                        placeholder='cam82'
                        className="userUpdateInput"
                        />
                    </div>

                    <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input
                        type="text"
                        placeholder='Cameron Hanes'
                        className="userUpdateInput"
                        />
                    </div>

                    <div className="userUpdateItem">
                        <label>Email</label>
                        <input
                        type="email"
                        placeholder='camhanes@gmail.com'
                        className="userUpdateInput"
                        />
                    </div>

                    <div className="userUpdateItem">
                        <label>Phone</label>
                        <input
                        type="text"
                        placeholder='+ 1 123 456 67'
                        className="userUpdateInput"
                        />
                    </div>

                    <div className="userUpdateItem">
                        <label>Address</label>
                        <input
                        type="text"
                        placeholder='Florida | USA'
                        className="userUpdateInput"
                        />
                    </div>
                
                </div>
            <div className="userUpdateRight">
                <div className="userUpdateUpload">
                    <img 
                       className='userUpdateImg'
                       src="https://offradranch.com/images/sports/cameron-hanes-8211-bio-wife-family-age-net-worth-height.jpg"
                       alt="" 
                    />
                    <label htmlFor="file">
                        <Publish className='userUpdateIcon'/>
                    </label>
                    <input type="file" id='file' style={{display: "none"}}/>
                </div>
                <button className="userUpdateButton">Update</button>
            </div>
                </form>
            </div>
        </div>
    </div>
  )
}
