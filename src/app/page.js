"use client";

import * as React from "react";
import {
  Button,
  Toolbar,
  AppBar,
  Snackbar,
  Alert as MuiAlert,
  Backdrop,
  CircularProgress,
  Drawer,
  List,
  ListItemButton,
  Tabs,
  Tab,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Link from "next/link";

export default function App() {
  const [tab1CurrentIndex, setTab1CurrentIndex] = React.useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Tabs
          value={tab1CurrentIndex}
          onChange={(_, newValue) => setTab1CurrentIndex(newValue)}
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
        {tab1CurrentIndex == 0 && <div>내용1</div>}
        {tab1CurrentIndex == 1 && <div>내용2</div>}
        {tab1CurrentIndex == 2 && <div>내용3</div>}
      </ThemeProvider>
    </>
  );
}
