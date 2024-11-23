import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./global.css";

const openSans = Open_Sans({
  subsets: ["cyrillic", "latin"]
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "blog-app",
    description: "homework blog app"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {children}
      </body>
    </html>
  );
}
