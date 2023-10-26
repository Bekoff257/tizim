import React, { useState } from "react";
import "./Layout.scss";
import Header from "../Header/Header"
import SideBar from "../sidebar/Sidebar";
const Layout = ({children}) => {
  const [open,setOpen] = useState('Statistika')
  const [drawer,setDrawer] = useState(true)
  return (
    <div className="layout_page">
      <SideBar setOpen={setOpen} drawer={drawer} setDrawer={setDrawer} />
      <div
        style={{
          width: drawer ? "75%" : "95%",
          padding: "0px",
          position: "relative",
        }}
      >

        <Header title={open} />
        {children}
      </div>
    </div>
  );
};

export default Layout;