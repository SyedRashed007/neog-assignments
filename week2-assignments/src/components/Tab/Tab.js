import React from "react";
import { Outlet, Link } from "react-router-dom";
function Tab(){
  return (
    <div>
      <nav>
        <Link to={`/tab/tab1`}>
          Fixed Tabs
        </Link>
        <Link to="/tab/tab2">
          Scrollable Tabs
        </Link>
        <Link to="/tab/tab3">
          Tabs with Icons
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Tab;