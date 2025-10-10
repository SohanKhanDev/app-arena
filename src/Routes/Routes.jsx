import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Applications from "../Pages/Applications";
import Layouts from "../Layouts/Layouts";
import InstalledApp from "../Pages/InstalledApp";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";
import AppNotFound from "../Components/AppNotFound";

// router creation
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>loading...</p>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("../application.json"),
      },
      {
        path: "/applications",
        element: <Applications />,
      },
      {
        path: "/installedApp",
        element: <InstalledApp />,
      },
      {
        path: "/application/:id",
        element: <AppDetails />,
      },
      {
        path: "/appnotfound",
        element: <AppNotFound />,
      },
    ],
  },
]);

export default router;
