import React from "react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "./SideBar";

export const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};
