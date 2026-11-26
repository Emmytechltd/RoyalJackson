import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppShortcut from "@/components/WhatsAppShortcut";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteTitle = "Royal Jackson Travel & Tours | The Art of Travel";
const siteDescription =
  "Personal travel planning, visa assistance, study abroad guidance, work and relocation support, flights, hotels and tour packages from Abuja, Nigeria.";

export const metadata: Metadata = {
  metadataBase: new URL("https://royaljacksontravelandtours.com"),
  title: {
    default: siteTitle,
    template: "%s | Royal Jackson Travel & Tours",
  },
  description: siteDescription,
  keywords: [
    "travel agency Abuja",
    "visa assistance Nigeria",
    "study abroad guidance",
    "flight and hotel booking",
    "travel consultation",
    "tour packages Nigeria",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://royaljacksontravelandtours.com",
    siteName: "Royal Jackson Travel & Tours",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "A colorful coastal destination in Italy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${playfairDisplay.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppShortcut />
      </body>
    </html>
  );
}
