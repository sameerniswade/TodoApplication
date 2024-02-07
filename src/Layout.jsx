import React from "react";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="flex justify-center items-center">
      <Outlet />
    </div>
  );
}

export default Layout;
