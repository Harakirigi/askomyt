import Button from "@components/button";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useEffect, useState } from "react";
import { scrollToSection } from "utils/scrollToSection";

const HeroSection: React.FC = () => {
    const t = useTranslations('hero');
    const [blurry, setBlurry] = useState([true, true, true, true, true, true])

    useEffect(() => {
        const timers = [
            setTimeout(() => setBlurry(prev => [false, prev[1], prev[2], prev[3], prev[4], prev[5]]), 300),
            setTimeout(() => setBlurry(prev => [prev[0], false, prev[2], prev[3], prev[4], prev[5]]), 500),
            setTimeout(() => setBlurry(prev => [prev[0], prev[1], false, prev[3], prev[4], prev[5]]), 700),
            setTimeout(() => setBlurry(prev => [prev[0], prev[1], prev[2], false, prev[4], prev[5]]), 900),
            setTimeout(() => setBlurry(prev => [prev[0], prev[1], prev[2], prev[3], false, prev[5]]), 1100),
            setTimeout(() => setBlurry(prev => [prev[0], prev[1], prev[2], prev[3], prev[4], false]), 1300),
        ];

        return () => timers.forEach(timer => clearTimeout(timer));
    }, []);

    return (
        <section className="flex flex-col items-center justify-center bg-black gap-y-6 h-dvh w-dvh">
            <div className="flex flex-row items-center gap-x-1">
                <Image src="/icons/location-icon.svg" alt="location-icon" width={24} height={24} />
                <p className="text-sm text-white-500">{t('location')}</p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <h1 className={`text-6xl font-semibold uppercase transition-all duration-200 opacity-0 ${!blurry[0] && 'opacity-100'}`}>
                    <span className={`transition-all duration-200 text-accent blur-md ${!blurry[1] && 'blur-none'}`}>{t('data')} </span>
                    <span className={`text-white transition-all duration-200 blur-md ${!blurry[2] && 'blur-none'}`}>{t('scientist')}</span>
                </h1>
                <h1 className={`text-5xl font-semibold uppercase transition-all duration-200 opacity-0 ${!blurry[3] && 'opacity-100'}`}>
                    <span className={`text-white transition-all duration-200 blur-md ${!blurry[4] && 'blur-none'}`}>{t('software')} </span>
                    <span className={`transition-all duration-200 text-accent blur-md ${!blurry[5] && 'blur-none'}`}>{t('developer')}</span>
                </h1>
            </div>
            <p className="text-base font-semibold text-white uppercase">{t('name')}</p>
            <div className="flex flex-row gap-x-6">
                <Button
                    variant="accentOutline"
                    icon={<Image src="/icons/box-icon.svg" alt="box-icon" width={24} height={24} />}
                    onClick={() => scrollToSection("portfolio")}
                >
                    {t('myPortfolio')}
                </Button>
                <Button
                    variant="accent"
                    icon={<Image src="/icons/contact-icon.svg" alt="contact-icon" width={24} height={24} />}
                >
                    {t('contactMe')}
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;