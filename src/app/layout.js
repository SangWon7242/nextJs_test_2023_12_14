import "./globals.css";

export const metadata = {
  title: "할일 리스트",
  description: "리액트 테스트 앱입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <a className="tw-text-[2rem] tw-font-bold" href="/">
          MUI 테스트
        </a>
        {children}
      </body>
    </html>
  );
}
