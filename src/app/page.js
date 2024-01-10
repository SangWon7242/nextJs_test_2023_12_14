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
  ListItemButton
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Link from "next/link";


export default function App() {
  const [open, setOpen] = React.useState(false);

  const alertRef = React.useRef(null);
  // ref는 컴포넌트에 전달되지 않는다.

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button variant="contained" onClick={() => setOpen(true)}>Show backdrop</Button>
        <Drawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
          >
            <List>
              <ListItemButton>
                <Link href="/write" legacyBehavior>
                  <a>글작성</a> 
                </Link>
              </ListItemButton>
              <ListItemButton>당근</ListItemButton>
              <ListItemButton>딸기</ListItemButton>
            </List>
          </Drawer>
      </ThemeProvider>
    </>
  );
}
