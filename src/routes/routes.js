import Home from "../pages/home";
import Login from "../pages/login";

import * as titles from "../constants/titles";
import ProtectedRoutes from "./protectedRoutes";
import NotFound from "../pages/notFound";

export const baseRoute = "/";
export const loginRoute = "/login";

const routings = () => [
  {
    path: loginRoute,
    exactPath: true,
    element: <Login title={titles.loginTitle} />,
  },
  {
    element: <ProtectedRoutes isAllowed={false} redirectPath={loginRoute} />,
    children: [
      {
        path: baseRoute,
        exactPath: true,
        element: <Home title={titles.baseTitle} />,
      },
    ],
  },
  {
    path: "*",
    exactPath: false,
    element: <NotFound title={titles.notFoundTitle} />,
  },
];
export default routings;
