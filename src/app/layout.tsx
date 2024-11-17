import type { Metadata } from "next";
import localFont from "next/font/local";
import { themeClass } from "@/styles/theme.css";
import { NavigationTop } from "@/components";
import ReactQueryProvider from "./_provider/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${themeClass} ${pretendard}`}>
        <ReactQueryProvider>
          <NavigationTop />
          {children}
          {modal}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
