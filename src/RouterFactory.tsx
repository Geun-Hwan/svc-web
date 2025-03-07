import { JointTemplate, LoginTemplate, MainHomeTemplate } from "@tmp";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import PageLayout from "./layout/PageLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <PageLayout Header={() => <>메인페이지</>} />,
    children: [
      {
        path: "",
        Component: MainHomeTemplate,
      },
    ],
  },
  {
    path: "login",
    element: <PageLayout Header={() => <>로그인페이지</>} />,

    children: [
      {
        path: "",
        Component: LoginTemplate,
      },
    ],
  },
  {
    path: "join",
    element: <PageLayout Header={() => <>가입페이지</>} />,
    children: [
      {
        path: "",
        Component: JointTemplate,
      },
    ],
  },
];
const RouterFactory = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default RouterFactory;
