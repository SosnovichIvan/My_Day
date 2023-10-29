import { Route, Routes } from "react-router-dom";

import { AuthPage } from "pages/auth";
import { DasboardPage } from "pages/dashboard";
import { NotFoundPage } from "pages/notFound";

import { AUTH_PAGE_PATH, DASHBOARD_PATH } from "shared/constants/path";

import { AppLayout } from "./layouts/appLayout";

export const Router = () => {
  return (
    <Routes>
      <Route element={<AppLayout />} path="/">
        <Route element={<AuthPage />} path={AUTH_PAGE_PATH} />
        <Route element={<DasboardPage />} path={DASHBOARD_PATH} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
