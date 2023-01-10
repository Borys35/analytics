/* eslint-disable @next/next/no-head-element */

import "@/styles/globals.css";
import { Source_Sans_Pro } from "@next/font/google";
import Providers from "./Providers";

const sourceSansPro = Source_Sans_Pro({
  weight: ["400", "600", "700"],
  variable: "--font-source-sans-pro",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceSansPro.variable}>
      <head />
      <body className="bg-gradient-to-br from-neutral-900 to-neutral-800 min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
