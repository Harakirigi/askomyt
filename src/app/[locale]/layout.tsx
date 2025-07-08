import { Geist, Geist_Mono } from "next/font/google";
import "@styles/globals.css";
import Header from "@components/header";
import Footer from "@components/footer";
import { AppProvider } from '@contexts/appContext';
import AOSInitializer from '@components/AOSInitializer';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@i18n/routing';
import { Toaster } from "@components/ui/sonner"
import { TooltipProvider } from "@radix-ui/react-tooltip";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: 'Asylbek Komyt | Portfolio',
        description: 'Portfolio of Asylbek Komyt, a FullStack Developer and Data Analyst based in Astana, Kazakhstan.',
        openGraph: {
            title: 'Asylbek Komyt | Portfolio',
            description: 'Portfolio of Asylbek Komyt, a FullStack Developer and Data Analyst based in Astana, Kazakhstan.',
            url: 'https://askomyt.com',
            siteName: 'AsKomyt',
            images: [
                {
                    url: '/images/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: 'Asylbek Komyt Portfolio',
                },
            ],
            locale: locale === 'ru' ? 'ru_RU' : locale === 'kz' ? 'kk_KZ' : 'en_US',
            type: 'website',
        },
    };
}

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

const LocaleLayout: React.FC<LocaleLayoutProps> = async ({ children, params }) => {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`}>
            <body className="overflow-x-hidden text-white bg-black">
                <NextIntlClientProvider locale={locale}>
                    <AppProvider>
                        <TooltipProvider>
                            <AOSInitializer />
                            <Header />
                            {children}
                            <Footer />
                            <Toaster />
                        </TooltipProvider>
                    </AppProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
};

export default LocaleLayout;