import "@fontsource-variable/oswald/index.css";
import "@fontsource-variable/josefin-sans/index.css";

import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "providers/theme";

export const Container = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <div>
        <Typography variant="label">test</Typography>
      </div>
      ;
    </ThemeProvider>
  );
};
