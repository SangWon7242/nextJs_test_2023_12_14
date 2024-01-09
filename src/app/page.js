"use client";

import { Button, Toolbar, AppBar } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { FaBars } from "react-icons/fa";
import theme from "./theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Toolbar className="tw-justify-center">
            <div className="tw-flex-1">
              <FaBars className="tw-cursor-pointer" />
            </div>
            <span className="tw-font-bold">HAPPY NOTE</span>
            <div className="tw-flex-1 tw-flex tw-justify-end">
              <a href="/write">글쓰기</a>
            </div>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </ThemeProvider>
    </>
  );
}
