import "./globals.css";

export const metadata = {
  title: "Jay Sangani | Portfolio",
  description: "Business Analytics Portfolio",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Background gradient */}
        <div className="fixed inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900" />
        {/* Data grid overlay */}
        <div className="fixed inset-0 -z-10 grid-bg pointer-events-none" />
        {/* App content */}
        {children}
      </body>
    </html>
  );
}
