/* eslint-disable @next/next/no-head-element */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <nav>Trakker</nav>
        <main>{children}</main>
        <footer>Borys Kaczmarek</footer>
      </body>
    </html>
  );
}
