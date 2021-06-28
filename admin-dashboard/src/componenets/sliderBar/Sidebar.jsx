import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report
} from "@material-ui/icons";
 import { Link } from "react-router-dom";
export default function Sliderbar() {
  return (
    <div className="sideBar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTile">Dashboard</h3>
          <ul className="sidebarList">
           
            <li className="sidebarListItem active">
            <Link to="/" className="link"/>
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTile">QuickMenu</h3>
          <ul className="sidebarList">
            {/* <Link className="link"/> */}
            <li className="sidebarListItem ">
              <PermIdentity className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <AttachMoney  className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart  className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTile">Notifications</h3>
          <ul className="sidebarList">
            {/* <Link className="link"/> */}
            <li className="sidebarListItem ">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline  className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTile">Staff</h3>
          <ul className="sidebarList">
            {/* <Link className="link"/> */}
            <li className="sidebarListItem ">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report  className="sidebarIcon" />
                Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
