import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "../../lib/registery";
export const metadata: Metadata = {
  title: "Orhan portfolio",
  description: "Orhan portfolio built with the React95 components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
