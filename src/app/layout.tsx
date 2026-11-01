import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppShortcut from "@/components/WhatsAppShortcut";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://royaljacksontravelandtours.com"),
  title: {
    default: "Royal Jackson Travel & Tours | The Art of Travel",
    template: "%s | Royal Jackson Travel & Tours",
  },
  description:
    "Thoughtful travel planning, visa assistance, study abroad guidance and flight support from Royal Jackson Travel & Tours in Abuja, Nigeria.",
  openGraph: {
    title: "Royal Jackson Travel & Tours | The Art of Travel",
    description:
      "Thoughtful travel planning, visa assistance, study abroad guidance and flight support from Abuja, Nigeria.",
    url: "https://royaljacksontravelandtours.com",
    siteName: "Royal Jackson Travel & Tours",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "An aircraft above the clouds",
      },
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
      <body className={`${geistSans.variable} antialiased flex flex-col min-h-screen`}>
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
