import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hoo Bank",
  description: "The Next Generation Payment Method.",
  icons: {
    icon: "assets/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body
        className={`${poppins.variable} pt-16 min-h-screen antialiased relative overflow-x-hidden selection:bg-lightBlue selection:text-background`}
      >
        <div className="container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
