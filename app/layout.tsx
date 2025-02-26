import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AuthProvider from "./providers/UserProvider";

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
     <AuthProvider>
     <body>
          <Navbar/>
          <main className="relative overflow-hidden">
          {children}
          </main>
          <Footer/>
        </body>

     </AuthProvider>
        
      
    </html>
  );
}

