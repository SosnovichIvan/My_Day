import "@fontsource-variable/oswald/index.css";
import "@fontsource-variable/josefin-sans/index.css";

import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

import { Router } from "providers/router";
import { theme } from "providers/theme";

export const Container = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};
