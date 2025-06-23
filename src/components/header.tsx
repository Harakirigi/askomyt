'use client';
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useEffect, useState } from "react";
import Button from "./button";
import NavLink from "./navLink";
import LanguageSwitcher from "./languageSwitcher";
import InterStyledButton from "./interStyledButton";

const Header: React.FC = () => {
    const t = useTranslations('header');
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`flex flex-row z-50 pt-[20px] fixed top-0 left-0 items-center w-dvw h-14 transition-all duration-300 ${isScrolled ? 'bg-black-dark shadow-[0_20px_40px_30px] shadow-black-dark' : 'bg-transparent shadow-transparent'
                }`}
        >
            <div className="flex ml-[320px] flex-row justify-center gap-x-7">
                <NavLink href="" >{t('aboutMe')}</NavLink>
                <NavLink href="" >{t('myProjects')}</NavLink>
                <NavLink href="" >{t('contactMe')}</NavLink>
            </div>
            <div id="action-buttons" className="flex mr-[330px] justify-end flex-1 gap-x-6">
                <LanguageSwitcher />
                <Button
                    variant="accentOutline"
                    icon={<Image src="/icons/download-icon.svg" alt="download-icon" width={24} height={24} />}
                >
                    {t('myCv')}
                </Button>
                <Button
                    variant="accent"
                    icon={<Image src="/icons/lightning-icon.svg" alt="lightning-icon" width={24} height={24} />}
                >
                    {t('reachOut')}
                </Button>
            </div>
        </header>
    );
};

export default Header;