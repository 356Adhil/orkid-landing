// app/layout.js
import { Fredoka, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoaderComponent from "@/components/loader";

// Import Fredoka for headings
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fredoka",
  display: "swap",
});

// Import Poppins for body text
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "OrKid Edutainment - Fun Learning for Kids",
  description:
    "Interactive learning platform for kids aged 3-6 years with animated lessons, games, and activities.",
  icons: [
    { rel: "icon", url: "/Asset.png" },
    { rel: "apple-touch-icon", url: "/Asset.png" },
    { rel: "shortcut icon", url: "/Asset.png" },
  ],
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <LoaderComponent />
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
