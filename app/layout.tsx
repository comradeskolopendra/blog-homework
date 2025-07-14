import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import { ReactNode } from "react";
import "./global.css";
import styles from "./layout.module.css";

import GithubIcon from "./assets/github.svg";

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

export default function RootLayout({children}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <header className={styles.header}>
          <h1 className={styles.logo}>
            skolopendrovskie dela
          </h1>

          <a href={"https://github.com/comradeskolopendra"}>
            <GithubIcon/>
          </a>
        </header>
        {children}
      </body>
    </html>
  );
}
