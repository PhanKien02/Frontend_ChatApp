import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RequireAuth from "./router/RequireAuth";
const Loading = lazy(() => import("./components/loading/loading"));
const AuthLayout = lazy(() => import("./layout/authentication/authLayout"));
const LoginPage = lazy(() =>
    import("./page/authentication/loginPage/loginPage")
);
const RegisterPage = lazy(() =>
    import("./page/authentication/registerPage/registerPage")
);
const MainLayout = lazy(() => import("./layout/main/mainLayout"));
function WebRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/auth/"
                    element={
                        <Suspense fallback={<Loading />}>
                            <AuthLayout />
                        </Suspense>
                    }>
                    <Route
                        path="login"
                        element={
                            <Suspense fallback={<Loading />}>
                                <LoginPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path="register"
                        element={
                            <Suspense fallback={<Loading />}>
                                <RegisterPage />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>

            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<Loading />}>
                            <RequireAuth>
                                <MainLayout />
                            </RequireAuth>
                        </Suspense>
                    }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default WebRouter;
