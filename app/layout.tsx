import "./globals.css";
import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Store by Shehzad",
  description:
    "Complete Full Stack Book Store Application build with NextJS 13 and Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={inter.style}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

// export const runtime = "experimental-edge";
// export const preferredRegion = "edge";
