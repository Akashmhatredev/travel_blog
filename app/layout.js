import { Readex_Pro } from "next/font/google";
import Header from "@/components/Header";
import { SITE } from "@/lib/site";
import "./globals.css";

const readex = Readex_Pro({ subsets: ["latin"], variable: "--font-readex" });

export const metadata = {
  title: {
    template: `%s – ${SITE.name} Photography`,
    default: `${SITE.name} Photography`,
  },
  description: "Travel photography, city by city: street scenes, old neighbourhoods and quiet corners from around the world.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Apply the saved (or system) theme before first paint to avoid a flash.
const themeScript = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={readex.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{`.fade-image{opacity:1}`}</style>
        </noscript>
      </head>
      <body id="top">
        <Header />
        {children}
      </body>
    </html>
  );
}
