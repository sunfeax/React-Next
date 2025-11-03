import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { APP_BASEURL, APP_DESC, APP_NAME } from "@/lib/constants";
import { ThemeProvider } from "next-themes";

const interFont = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESC,
  metadataBase: new URL(APP_BASEURL)
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interFont.variable} antialiased`}
      >
        <ThemeProvider
          attribute={'class'}
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
