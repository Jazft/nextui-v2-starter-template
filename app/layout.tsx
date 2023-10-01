"use client"

import { Providers } from "#/app/provider";
import "#/css/main.css";
type LayoutProps = { children: React.ReactNode; }

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <html>
        <Providers>
          {children}
        </Providers>
      </html>
    </>
  );
}