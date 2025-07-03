'use client';
import { useTranslations } from 'next-intl';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { useAppContext } from '@contexts/appContext';
import { useEffect } from 'react';

const ReachMePage: React.FC = () => {
  const t = useTranslations('reachMe');
  const { setHideLayout } = useAppContext();

  useEffect(() => {
    setHideLayout(true);
    return () => {
      setTimeout(() => setHideLayout(false), 500);
    };
  }, [setHideLayout]);

  return (
    <section className="flex items-center justify-center overflow-x-hidden bg-black w-dvw min-h-dvh">
      <main className="flex flex-col max-w-[600px] min-w-[300px] py-8 px-4">
        <h1 className="mb-6 text-3xl font-semibold text-white" data-aos="fade-down">{t('title')}</h1>
        <div className="flex flex-col gap-y-4" data-aos="fade-up">
          <a href="mailto:nkomyt2@gmail.com" className="flex items-center text-white gap-x-2 hover:text-accent" aria-label="Email">
            <Mail size={20} /> {t('email')}
          </a>
          <a href="tel:+77787050395" className="flex items-center text-white gap-x-2 hover:text-accent" aria-label="Phone">
            <Phone size={20} /> {t('phone')}
          </a>
          <a href="https://github.com/Harakirigi" className="flex items-center text-white gap-x-2 hover:text-accent" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} /> {t('github')}
          </a>
          <a href="https://linkedin.com/in/askomyt" className="flex items-center text-white gap-x-2 hover:text-accent" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} /> {t('linkedin')}
          </a>
        </div>
      </main>
    </section>
  );
};

export default ReachMePage;