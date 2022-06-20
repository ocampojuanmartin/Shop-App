import React from 'react'
import "./topbar.css"
import {Language, NotificationsNone, Settings} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Admin Panel</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://www.seekpng.com/png/full/858-8584137_fashion-forward-episodes-offers-fashion.png" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
