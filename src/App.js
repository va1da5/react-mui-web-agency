import { CssBaseline } from "@mui/material";
import Index from "./pages/Index";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Index />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
