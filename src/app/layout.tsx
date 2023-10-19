"use client";
import Providers from "@/lib/Providers";
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
