"use client";

import * as React from "react";
import {
  Button,
  Toolbar,
  AppBar,
  Snackbar,
  Alert as MuiAlert,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

/*
const Alert = (props) => {
  const { severity, children } = props;

  return (   
    <MuiAlert {...props} variant="filled" />    
  );
};
*/

// React.forwardRef로 한번 감싸주면 ref를 받을 수 있다.
const Alert = React.forwardRef((props, ref) => {
  const { severity, children } = props;

  return (
    /*
    // v1
    <Alert severity={severity} variant="filled">
      {children}
    </Alert>
    */

    /*
    // v2
    <Alert severity={severity} children={children} variant="filled" />    
    */

    // v3 : 전개연산자
    // <Alert {...props} variant="filled" />
    <MuiAlert {...props} ref={ref} variant="filled" />
    // Alert as MuiAlert -> 이걸 해줌으로 Alert 대신 MuiAlert 이름 사용이 가능하다.
  );
});

export default function App() {
  const [open, setOpen] = React.useState(false);

  const alertRef = React.useRef(null);
  // ref는 컴포넌트에 전달되지 않는다.

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button onClick={() => setOpen(true)}>Open simple snackbar</Button>
        {/*
         - Alert2 컴포넌트에 정보를  3개(severity, variant, children) 3개를 넘겨줌
         - 여기서 컴포넌트에 variant가 있는 경우 컴포넌트에 있는 녀석이 이김
         - 반대로 variant="filled"가 Alert 안에 있는 경우도 마찬가지로 컴포넌트가 이김
        */}
        {/* <Alert ref={alertRef} severity="error" variant="">
          This is a success message!
        </Alert> */}
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          // message="게시물이 생성되었습니다."
        >
          {/* <div>하하</div> */}
          <Alert severity="success">게시물이 삭제되었습니다.</Alert>
        </Snackbar>
      </ThemeProvider>
    </>
  );
}
