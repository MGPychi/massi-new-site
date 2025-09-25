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
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tcppjkiv9z");
          `}
        </Script>
        <Script id="meta-pixel-script" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '736496702433394');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=736496702433394&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
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
