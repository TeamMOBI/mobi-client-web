import type { Metadata } from "next";
import localFont from "next/font/local";
import { themeClass } from "@/styles/theme.css";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${themeClass} ${pretendard}`}>{children}</body>
    </html>
  );
}
