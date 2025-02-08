import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/app/component/NavBar";

export const metadata: Metadata = {
  title: "solflare",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-background " >
        <div className="mx-auto container bg-background text-white ">
          
        <NavBar/>
          
          {children}</div>
      </body>
    </html>
  );
}
