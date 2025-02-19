import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";

export const metadata: Metadata = {
  title: "Hafizuddin Sharif",
  description: "Developer portfolio of Hafizuddin Sharif",
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono antialiased max-w-[720px] mx-auto relative`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
