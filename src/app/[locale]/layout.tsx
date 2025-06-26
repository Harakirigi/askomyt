import { Geist, Geist_Mono } from "next/font/google";
import "../../styles/globals.css";
import Header from "@components/header";
import { AppProvider } from '@contexts/appContext';
import AOSInitializer from '@components/AOSInitializer';

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "AsKomyt",
    description: "Asylbek Komyt | Portfolio | I am FullStack Developer and Data Analyst, currently 19 y.o and from Astana/Kazakhstan",
};

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

        <html lang={locale}>
            <body className={`${geistSans.variable} ${geistMono.variable} bg-black`}>
                <NextIntlClientProvider>
                    <AppProvider>
                        <AOSInitializer />
                        <Header />
                        {children}
                    </AppProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export default LocaleLayout;