"use client";

import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { MdDelete } from "react-icons/md";
import theme from "./theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="tw-flex tw-items-center tw-gap-x-3">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </div>

        <div className="tw-flex tw-items-center tw-gap-x-3 tw-mt-3">
          <Button
            variant="contained"
            onClick={() => alert("버튼이 클릭되었습니다.")}
          >
            Contained
          </Button>
          <Button variant="contained" startIcon={<MdDelete />}>
            Disabled
          </Button>
          <Button variant="contained" href="/sub">
            sub
          </Button>
        </div>
      </ThemeProvider>
    </>
  );
}
