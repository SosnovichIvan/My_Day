import { Route, Routes } from "react-router-dom";

import { AuthPage } from "pages/auth";
import { DasboardPage } from "pages/dashboard";
import { NotFoundPage } from "pages/notFound";
import { RegisterPage } from "pages/register";

import {
  AUTH_PAGE_PATH,
  AUTH_PATH,
  DASHBOARD_PATH,
  REGISTER_PAGE_PATH,
} from "shared/constants/path";

import { AuthLayout } from "./layouts/authLauout";

export const Router = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />} path={AUTH_PATH}>
        <Route element={<AuthPage />} path={AUTH_PAGE_PATH} />
        <Route element={<RegisterPage />} path={REGISTER_PAGE_PATH} />
      </Route>
      <Route element={<DasboardPage />} path={DASHBOARD_PATH} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
