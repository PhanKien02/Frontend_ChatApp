import{ React, lazy } from "react";
import { BrowserRouter, RouterProvider } from "react-router-dom";
const MainLayout = lazy(() => import("../layout/main/mainLayout"));
function WebRouter() {
    return (
        <BrowserRouter>
            <RouterProvider>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<PublicPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route
                            path="/protected"
                            element={
                                <RequireAuth>
                                    <ProtectedPage />
                                </RequireAuth>
                            }
                        />
                    </Route>
                </Routes>
            </RouterProvider>
        </BrowserRouter>
    );
}

export default WebRouter;
