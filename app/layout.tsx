import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Product Academy - Make $800+ with Digital Products",
  description:
    "Learn how to create and sell digital products with our proven system. No experience needed. 90-day guarantee.",
  keywords:
    "digital products, online business, passive income, digital marketing",
  openGraph: {
    title: "Digital Product Academy - Make $800+ with Digital Products",
    description:
      "Learn how to create and sell digital products with our proven system. No experience needed. 90-day guarantee.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Product Academy - Make $800+ with Digital Products",
    description:
      "Learn how to create and sell digital products with our proven system. No experience needed. 90-day guarantee.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Wistia Video Scripts */}
        <Script
          src="https://fast.wistia.com/player.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://fast.wistia.com/embed/ii998vfwnk.js"
          strategy="afterInteractive"
          type="module"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            wistia-player[media-id='ii998vfwnk']:not(:defined) { 
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/ii998vfwnk/swatch'); 
              display: block; 
              filter: blur(5px); 
              padding-top: 56.25%; 
              border-radius: 0.75rem;
            }
            wistia-player {
              border-radius: 0.75rem;
              overflow: hidden;
              width: 100%;
            }
          `,
          }}
        />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
