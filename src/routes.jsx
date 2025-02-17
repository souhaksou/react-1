import { createHashRouter, Navigate } from "react-router-dom";
import Index from "./pages/index";
import Home from "./pages/home";
import Mall from "./pages/mall";
import User from "./pages/user";
import OtherOne from "./pages/otherOne";
import OtherTwo from "./pages/otherTwo";

const routes = [
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "",
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "mall",
        element: <Mall />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "other",
        children: [
          {
            path: "",
            element: <Navigate to="other1" replace />,
          },
          {
            path: "other1",
            element: <OtherOne />,
          },
          {
            path: "other2",
            element: <OtherTwo />,
          },
        ],
      },
    ],
  },
];

const router = createHashRouter(routes);

export default router;
