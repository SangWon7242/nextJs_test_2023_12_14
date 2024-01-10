"use client";

import * as React from "react";
import {
  Button,
  Toolbar,
  AppBar,
  Snackbar,
  Alert as MuiAlert,
  Backdrop,
  CircularProgress
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";


export default function App() {
  const [open, setOpen] = React.useState(false);

  const alertRef = React.useRef(null);
  // ref는 컴포넌트에 전달되지 않는다.

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button variant="contained" onClick={() => setOpen(true)}>Show backdrop</Button>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={() => setOpen(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      </ThemeProvider>
    </>
  );
}
