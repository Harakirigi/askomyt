'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import Button from './button';
import NavLink from './navLink';
import LanguageSwitcher from './languageSwitcher';
import { useAppContext } from '@contexts/appContext';
import { scrollToSection } from 'utils/scrollToSection';
import { LucideScanEye } from 'lucide-react';

const Header: React.FC = () => {
    const t = useTranslations('header');
    const [appear, setAppear] = useState(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const { hideHeader } = useAppContext();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        };

        setTimeout(() => setAppear(true), 100);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`flex flex-row z-50 pt-[20px] fixed top-0 left-0 items-center w-dvw h-14 transition-all duration-300 ${isScrolled ? 'bg-black-dark shadow-[0_20px_40px_30px] shadow-black-dark' : 'bg-transparent shadow-transparent'
                } ${hideHeader || !appear ? '-translate-y-16 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}
            role="banner"
        >
            <nav className="flex ml-[320px] flex-row justify-center gap-x-7" aria-label="Main navigation">
                <NavLink href="#about" onClick={() => scrollToSection('about')}>
                    {t('aboutMe')}
                </NavLink>
                <NavLink href="#portfolio" onClick={() => scrollToSection('portfolio')}>
                    {t('myProjects')}
                </NavLink>
                <NavLink href="/contact">{t('contactMe')}</NavLink>
            </nav>
            <div id="action-buttons" className="flex mr-[330px] justify-end flex-1 gap-x-6" aria-label="Action buttons">
                <LanguageSwitcher />
                <Button
                    variant="accentOutline"
                    styles={"group"}
                    icon={<LucideScanEye width={24} height={24} className='transition-transform duration-300 ease-out group-hover:scale-90' />}
                    onClick={() => window.location.href = '/CV'}
                    aria-label="Download CV"
                >
                    {t('myCv')}
                </Button>
                <Button
                    variant="accent"
                    styles={"group"}
                    icon={<Image src="/icons/lightning-icon.svg" alt="Contact icon" width={24} height={24} className='transition-transform duration-300 ease-out group-hover:scale-90' />}
                    onClick={() => window.location.href = '/contact'}
                    aria-label="Contact me"
                >
                    {t('reachOut')}
                </Button>
            </div>
        </header>
    );
};

export default Header;