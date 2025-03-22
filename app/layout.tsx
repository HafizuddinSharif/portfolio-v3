import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";

export const metadata: Metadata = {
  title: "Hafizuddin Sharif | Software Developer",
  description:
    "Portfolio of Hafizuddin Sharif - Full Stack Developer specializing in web development, software engineering, and modern JavaScript frameworks.",
  keywords: ["software developer", "web developer", "full stack", "portfolio", "Hafizuddin Sharif", "JavaScript", "React", "Next.js", "Malaysia"],
  authors: [{ name: "Hafizuddin Sharif" }],
  creator: "Hafizuddin Sharif",
  publisher: "Hafizuddin Sharif",
  robots: "index, follow",
  metadataBase: new URL("https://hafizuddinsharif.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hafizuddinsharif.com", // Replace with your actual domain
    title: "Hafizuddin Sharif | Software Developer",
    description:
      "Portfolio of Hafizuddin Sharif - Full Stack Developer specializing in web development, software engineering, and modern JavaScript frameworks.",
    siteName: "Hafizuddin Sharif Portfolio",
    images: [
      {
        url: "/og-image.png", // Add your actual Open Graph image
        width: 1200,
        height: 630,
        alt: "Hafizuddin Sharif - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hafizuddin Sharif | Software Developer",
    description:
      "Portfolio of Hafizuddin Sharif - Full Stack Developer specializing in web development, software engineering, and modern JavaScript frameworks.",
    creator: "@sharippu", // Replace with your actual Twitter handle
    images: ["/og-image.png"], // Same as OG image or a Twitter-specific one
  },
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
