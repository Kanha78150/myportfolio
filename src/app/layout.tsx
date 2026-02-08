import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import StoreProvider from "@/components/providers/StoreProvider";
import Preloader from "@/components/preloader/Preloader";
import CursorFollower from "@/components/ui/CursorFollower";
import Footer from "@/components/ui/Footer";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bholasankar Nanda - Full-Stack Developer",
  description: "Full-stack developer portfolio of Bholasankar Nanda.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${grotesk.variable} antialiased`}>
        <StoreProvider>
          <CursorFollower />
          <Preloader />
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
