import { Header } from "@/components/header/header";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ReactNode } from "react";
import "./global.css";

import AppContextProvider from "@/context/app.context";


const openSans = Open_Sans({
  subsets: ["cyrillic", "latin"]
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "blog-app",
    description: "homework blog app"
  }
}

export interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <AppContextProvider>
          <Header />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
