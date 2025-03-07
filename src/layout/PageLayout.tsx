import { ComponentType } from "react";
import { Outlet } from "react-router-dom";

const PageLayout = ({ Header }: { Header?: ComponentType }) => {
  return (
    <div>
      {Header && <Header />}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
