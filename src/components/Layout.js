import React from "react";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Topbar />
      {children}
    </div>
  );
};

export default Layout;
