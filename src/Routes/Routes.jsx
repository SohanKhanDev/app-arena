import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Applications from "../Pages/Applications";
import Layouts from "../Layouts/Layouts";
import InstalledApp from "../Pages/InstalledApp";
import ErrorPage from "../Pages/ErrorPage";

// router creation
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/applications",
        element: <Applications />,
      },
      {
        path: "/installedApp",
        element: <InstalledApp />,
      },
    ],
  },
]);

export default router;
