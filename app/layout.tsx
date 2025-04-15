import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimationWrapper from "./providers/ScrollAnimationWrapper ";

export const metadata: Metadata = {
  title: "TunUp",
  description: "Up to the next challenge.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body>
          <Navbar/>
          <main className="relative overflow-hidden">
            <ScrollAnimationWrapper>
            {children}
            </ScrollAnimationWrapper>
          
          </main>
          <Footer/>
        </body>
    </html>
  );
}

