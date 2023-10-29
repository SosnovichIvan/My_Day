import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Header } from "widgets/header";

export const AppLayout = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Outlet />
    </div>
  );
};
