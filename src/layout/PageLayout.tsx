import React from "react";
import { Outlet } from "react-router-dom";

const PageLayout = ({ title }: { title: string }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
