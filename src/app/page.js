"use client";

import { Button, Toolbar, AppBar } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { MdDelete } from "react-icons/md";
import theme from "./theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar className="tw-justify-center">
            <span className="tw-font-bold">HAPPY NOTE</span>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
