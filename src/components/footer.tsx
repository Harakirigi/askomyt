'use client';
import { useTranslations } from 'next-intl';
import NavLink from './navLink';
import Image from 'next/image';
import { useAppContext } from '@contexts/appContext';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const t = useTranslations('footer');
  const { hideHeader } = useAppContext();
  const { hideFooter } = useAppContext();

  return (
    <footer className={`bg-black-dark z-50 bottom-0 left-0 overflow-x-hidden text-white py-8 w-dvw ${hideHeader ? 'mt-0' : 'mt-14'} ${hideFooter ? '-translate-y-16 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
      <div className="mx-[320px] flex flex-col gap-y-6">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-semibold">Asylbek Komyt</h2>
            <p className="text-sm font-light text-white-300">{t('footerDescription')}</p>
          </div>
          <div className="flex flex-row gap-x-6">
            <a href="https://github.com/Harakirigi" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer">
              <Github className="text-white transition-colors hover:text-accent" size={24} />
            </a>
            <a href="https://linkedin.com/in/askomyt" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-white transition-colors hover:text-accent" size={24} />
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-x-7">
          <NavLink href="/">{t('home')}</NavLink>
          <NavLink href="/contact">{t('contact')}</NavLink>
          <NavLink href="/CV">{t('cv')}</NavLink>
        </div>
        <div className="text-sm text-white-400">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;