import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { SessionProvider } from "@/components/providers/SessionProvider";
import { defaultMetadata, structuredData } from "@/lib/seo";
import YandexMetrika from "@/components/YandexMetrika";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    ...defaultMetadata,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: '/',
        languages: {
            'ru-RU': '/',
        },
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#9A8A88',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="ru">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
                <link rel="canonical" href="https://chipizubova.online/" />
                <meta name="geo.region" content="RU" />
                <meta name="geo.placename" content="Россия" />
                <meta name="language" content="Russian" />
                <meta name="revisit-after" content="7 days" />
                <meta name="distribution" content="global" />
                <meta name="rating" content="general" />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <SessionProvider>
                    <CartProvider>{children}</CartProvider>
                </SessionProvider>
                <YandexMetrika />
                {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
                    <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
                )}
            </body>
        </html>
    );
}
