"use client";

import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

/*
// 커스텀 테마
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8686",
      contrastText: "#fff",
    },
    secondary: {
      main: "#19857b",
    },
  },
});
*/

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button className="" variant="contained">
          Contained
        </Button>
      </ThemeProvider>
    </>
  );
}
