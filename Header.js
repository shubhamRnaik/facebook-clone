import React from 'react'
import "./css/header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import { Avatar, IconButton } from '@material-ui/core';

import AppsIcon from '@material-ui/icons/Apps';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


function Header() {


    return (
        <div className="header">
            <div className="header__left">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"/>

                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>

                <div className="header__option">
                    <OndemandVideoIcon fontSize="large"/>
                </div>

                <div className="header__option">
                    <PeopleIcon fontSize="large"/>
                </div>

                <div className="header__option">
                    <SportsEsportsIcon fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQry1iOrc8u_v8st6ECCwY2tqk-jJO7VyLeLzLcG5e5YbnuB1xT"}/>
                    <h5>{"Hrithik"}</h5>
                </div>
                <IconButton>
                    <AppsIcon/>
                </IconButton>

                <IconButton>
                    <ForumIcon/>
                </IconButton>

                <IconButton>
                    <NotificationsIcon/>
                </IconButton>

                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                


            </div>
        </div>
    )
}

export default Header
