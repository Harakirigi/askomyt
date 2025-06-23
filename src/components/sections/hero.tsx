import Button from "@components/button";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const HeroSection: React.FC = () => {
    const t = useTranslations('hero');

    return (
        <section className="flex flex-col items-center justify-center bg-black gap-y-6 h-dvh w-dvh">
            <div className="flex flex-row items-center gap-x-1">
                <Image src="/icons/location-icon.svg" alt="location-icon" width={24} height={24} />
                <p className="text-sm text-white-500">{t('location')}</p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-6xl font-semibold text-white uppercase">
                    <span className="text-accent">{t('data')}</span> {t('scientist')}
                </h1>
                <h1 className="text-5xl font-semibold text-white uppercase">
                    {t('software')} <span className="text-accent">{t('developer')}</span>
                </h1>
            </div>
            <p className="text-base font-semibold text-white uppercase">{t('name')}</p>
            <div className="flex flex-row gap-x-6">
                <Button
                    variant="accentOutline"
                    icon={<Image src="/icons/box-icon.svg" alt="box-icon" width={24} height={24} />}
                >
                    {t('myWorks')}
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