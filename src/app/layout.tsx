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
  description:
    "I’m Bholasankar Nanda, a full-stack developer passionate about building scalable and user-centric digital products. With a strong background in modern web technologies, I focus on creating seamless experiences that merge performance, functionality, and elegant design. I enjoy solving complex engineering challenges and collaborating on impactful products that deliver real-world value.",
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
