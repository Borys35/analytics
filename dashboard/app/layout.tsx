/* eslint-disable @next/next/no-head-element */

import "@/styles/globals.css";
import Container from "@/ui/atoms/Container";
import Footer from "@/ui/Footer";
import Nav from "@/ui/root/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex flex-col min-h-screen bg-neutral-900">
          <Nav />
          <Container as="main" className="flex-1">
            {children}
          </Container>
          <Footer />
        </div>
      </body>
    </html>
  );
}
