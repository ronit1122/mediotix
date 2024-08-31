import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mediotix",
  description: "A leading MarTech agency with a global presence, dedicated to helping businesses worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link
          href="https://db.onlinewebfonts.com/c/cefa2bca89ec27b6b9c51c215bce8ba2?family=Nexa-Regular"
          rel="stylesheet"
        /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
