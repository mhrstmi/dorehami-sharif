import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "../SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar" >
      <img src={require("../../images/fav/dorehami-sharif-logo.png")} className="logo" />

      <SidebarOption active Icon={HomeIcon} text="کامپیوتر" />
      <SidebarOption Icon={SearchIcon} text="مواد" />
      <SidebarOption Icon={NotificationsNoneIcon} text="صنایع" />
      <SidebarOption Icon={MailOutlineIcon} text="هوا فضا" />
      <SidebarOption Icon={BookmarkBorderIcon} text="شیمی" />
      <SidebarOption Icon={ListAltIcon} text="برق" />
      <SidebarOption Icon={PermIdentityIcon} text="مکانیک" />
      <SidebarOption Icon={MoreHorizIcon} text="عمران" />

      {/* Button -> Tweet */}
      
    </div>
  );
}

export default Sidebar;
