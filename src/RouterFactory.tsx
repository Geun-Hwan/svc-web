import { RouteObject, RouterProvider } from "react-router"; // react-router에서 가져오기
import { createBrowserRouter } from "react-router-dom";
import { MainHomeTemplate, TestTemplate, TestTemplate2 } from "@tmp";
import PageLayout from "./layout/PageLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <PageLayout title="메인 페이지야" />,
    children: [
      {
        path: "",
        element: <MainHomeTemplate />,
      },
    ],
  },
  {
    path: "test",
    element: <PageLayout title="TEST 페이지 야" />,
    children: [
      {
        path: "1",
        element: <TestTemplate />,
      },
      {
        path: "2",
        element: <TestTemplate2 />,
      },
    ],
  },
];
const RouterFactory = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default RouterFactory;
