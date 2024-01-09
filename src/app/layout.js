import "./globals.css";

export const metadata = {
  title: "할일 리스트",
  description: "리액트 테스트 앱입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1 className="tw-text-[2rem] tw-font-bold">test</h1>
        {children}
      </body>
    </html>
  );
}
