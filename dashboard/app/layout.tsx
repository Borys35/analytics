/* eslint-disable @next/next/no-head-element */

import "@/styles/globals.css";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gradient-to-br from-neutral-900 to-neutral-800 min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
