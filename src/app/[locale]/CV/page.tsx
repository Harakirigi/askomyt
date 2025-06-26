'use client';
import Button from '@components/button';
import { useAppContext } from '@contexts/appContext';
import { ArrowLeftSquareIcon, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import cv from "@lib/cv";
import { useTranslations } from 'next-intl';

const CV: React.FC = () => {
    const t = useTranslations('cv');
    const { setHideHeader } = useAppContext();

    useEffect(() => {
        setHideHeader(true);
        return () => {
            setTimeout(() => setHideHeader(false), 500);
        };
    }, [setHideHeader]);

    return (
        <section className="flex items-center justify-center bg-black w-dvw min-h-dvh">
            <main className="flex flex-col max-w-[600px] min-w-[300px] py-8 px-4">
                <div className="flex justify-between mb-6" data-aos="fade-down" data-aos-duration="400" data-aos-easing="ease-out">
                    <Button variant="primaryOutline" styles="text-xs" icon={<ArrowLeftSquareIcon />} onClick={() => window.location.href = '/'}>
                        {t('back')}
                    </Button>
                    <Button variant="primaryText" styles="text-xs" icon={<Download />} onClick={() => window.location.href = '/files/cv.pdf'}>
                        {t('downloadCV')}
                    </Button>
                    <button className="relative p-2 overflow-hidden text-xs font-medium border border-white rounded-lg group">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                            {t('cutItDown')}
                        </span>
                        <span className="absolute inset-0 transition-transform duration-300 ease-out origin-left transform scale-x-0 bg-white group-hover:scale-x-100"></span>
                    </button>
                </div>

                <div className="flex flex-row items-start justify-start py-6" data-aos="fade-in" data-aos-duration="400" data-aos-easing="ease-out">
                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                        <Image
                            src={cv.avatar}
                            alt="Asylbek Komyt avatar"
                            width={100}
                            height={100}
                            className="object-cover w-full h-full"
                            style={{ aspectRatio: '1/1' }}
                        />
                    </div>
                    <div className="flex flex-col px-3 py-4">
                        <p className="text-base font-semibold text-white">{cv.name}</p>
                        <p className="text-sm font-light text-white-300">{cv.profession}</p>
                        <p className="pt-2 text-sm font-thin text-white-400">{cv.bio}</p>
                    </div>
                </div>

                <div>
                    <p className="py-4 text-base font-medium text-white capitalize" data-aos="fade-right" data-aos-duration="400" data-aos-easing="ease-out">
                        {t('about')}
                    </p>
                    <p className="text-sm font-light text-white-300" data-aos="fade-in" data-aos-duration="400" data-aos-easing="ease-out">
                        {cv.about}
                    </p>
                </div>

                {cv.sections.map((section) => (
                    <div key={section.id}>
                        <p className="py-4 text-base font-medium text-white capitalize" data-aos="fade-right" data-aos-duration="400" data-aos-easing="ease-out">
                            {section.title}
                        </p>
                        {section.items.map((item) => (
                            <div className="grid grid-cols-[1fr,2fr] p-2 -mx-2 rounded-lg group gap-6 border border-transparent hover:border-gray-600" key={item.id}>
                                <div className="py-2" data-aos="fade-right" data-aos-duration="400" data-aos-easing="ease-out">
                                    <p className="text-sm font-light capitalize text-white-300">{item.year}</p>
                                </div>
                                <div className="py-2" data-aos="fade-left" data-aos-duration="400" data-aos-easing="ease-out">
                                    {item.isLink ? (
                                        <a
                                            href={item.year === 'phone' ? `tel:${item.link}` : item.year === 'email' ? `mailto:${item.link}` : item.link}
                                            className="text-base font-normal text-white transition-all duration-300 ease-out group-hover:text-accent hover:underline"
                                            aria-label={item.title}
                                            target={item.year === 'github' ? '_blank' : '_self'}
                                            rel={item.year === 'github' ? 'noopener noreferrer' : undefined}
                                        >
                                            {item.title}
                                        </a>
                                    ) : (
                                        <p className="text-base font-normal text-white transition-all duration-300 ease-out group-hover:text-accent">
                                            {item.title}
                                        </p>
                                    )}
                                    <p className="text-sm font-light text-white-400">{item.shortDescription}</p>
                                    <p className="pt-2 text-sm font-light text-white-200">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </main>
        </section>
    );
};

export default CV;