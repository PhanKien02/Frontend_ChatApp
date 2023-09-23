import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
const Loading = lazy(() => import("../components/loading/loading"));
const MainLayout = lazy(() => import("../layout/main/mainLayout"));
export const AuthRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        loader: Loading,
    },
]);

