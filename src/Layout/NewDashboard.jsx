import React, { useState } from "react";
import Navbar from "../pages/Dashboard/NavBar/Navbar";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const NewDashboard = () => {
  const [isAdmin] = useAdmin();
  const [sideBarToggle, setSidebarToggle] = useState(false);
  return (
    <div>
      <Sidebar sideBarToggle={sideBarToggle} />
      <Navbar
        sideBarToggle={sideBarToggle}
        setSidebarToggle={setSidebarToggle}
      ></Navbar>
    </div>
  );
};

export default NewDashboard;