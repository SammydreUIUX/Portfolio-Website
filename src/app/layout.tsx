import type { Metadata } from "next";
import { JetBrains_Mono, Righteous } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Samuel Famuyiwa - Product Designer & UX Specialist",
  description: "Professional portfolio showcasing UX/UI design projects and product design expertise by Samuel Famuyiwa",
  icons: {
    icon: "/images/sf-logo.png",
    shortcut: "/images/sf-logo.png",
    apple: "/images/sf-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${righteous.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
