'use client';
import { useState } from 'react';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Globe2Icon } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
    const t = useTranslations('header');
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const locales = ['en', 'ru'] as const;
    const localeNames: { [key: string]: string } = {
        en: t('english'),
        ru: t('russian'),
    };

    const changeLocale = (locale: string) => {
        router.push(pathname, { locale });
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center gap-2 px-4 font-semibold text-white transition-all duration-300 bg-transparent border border-white rounded-lg h-11 hover:text-white-400 hover:border-white-400"
            >
                <Globe2Icon />
            </button>
            {isOpen && (
                <div className="absolute right-0 z-50 w-[58px] mt-2 border rounded-lg shadow-lg bg-black-dark border-white">
                    {locales.map((locale) => (
                        <button
                            key={locale}
                            onClick={() => changeLocale(locale)}
                            className="w-[58px] px-4 py-2 text-left rounded-lg text-white transition-all duration-300 hover:bg-white-200 hover:text-black"
                        >
                            {localeNames[locale]}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;