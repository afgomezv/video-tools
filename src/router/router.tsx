//* React-router-domm
import { createBrowserRouter } from "react-router-dom";

//* Raiz del proyecto
import { Root } from "../Root";

//* Layouts
import { SidebarLayout } from "../layouts/SidebarLayout";

//* Pages
import { HomePage } from "../page/HomePage";
import { BeMasterPage } from "../page/BeMasterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <SidebarLayout />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "bemaster",
            element: <BeMasterPage />,
          },
        ],
      },
    ],
  },
]);
