'use client';
import { useTranslations } from 'next-intl';
import BeforeAfterSlider from '@components/beforeAfterSlider';

const WhyMeSection: React.FC = () => {
    const t = useTranslations('whyMe');

    const beforeContent = <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="text-4xl font-bold text-white">Before</div>
    </div>
    const afterContent = <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-red-500 to-pink-600">
        <div className="text-4xl font-bold text-white">After</div>
    </div>

    return (
        <section className="flex flex-col bg-black min-h-64 gap-y-10">
            <p className="text-5xl font-medium text-transparent uppercase bg-clip-text bg-gradient-to-t from-gray-300 to-gray-400">{t('header')}</p>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_3fr_3fr] gap-4 px-4 h-[36rem] sm:h-[24rem] lg:h-[28rem]">

                <div className="flex flex-col h-full gap-4">
                    <div className="flex flex-col flex-1 px-4 py-8 overflow-hidden text-transparent transition-all duration-300 border border-gray-600 border-dashed rounded-lg backdrop-blur-lg bg-grid-squares-current hover:text-accent-10 gap-y-4 group hover:border-accent-50 hover:rounded-2xl">
                        <h1 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-accent">{t('f2')}</h1>
                        <p className="mb-4 text-sm font-light text-gray-300">{t('fd2')}</p>
                    </div>
                    <div className="flex flex-col flex-1 px-4 py-8 overflow-hidden text-transparent transition-all duration-300 border border-gray-600 border-dashed rounded-lg backdrop-blur-lg bg-grid-squares-current hover:text-accent-10 gap-y-4 group hover:border-accent-50 hover:rounded-2xl">
                        <h1 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-accent">{t('f4')}</h1>
                        <p className="mb-4 text-sm font-light text-gray-300">{t('fd4')}</p>
                    </div>
                </div>

                <div className="flex flex-col px-4 py-8 overflow-hidden text-transparent transition-all duration-300 border border-gray-600 border-dashed rounded-lg backdrop-blur-lg bg-grid-squares-current hover:text-accent-10 gap-y-4 group hover:border-accent-50 hover:rounded-2xl">
                    <h1 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-accent">{t('f1')}</h1>
                    <p className="mb-4 text-sm font-light text-gray-300">{t('fd1')}</p>
                    <BeforeAfterSlider beforeContent={beforeContent} afterContent={afterContent} />
                </div>

                <div className="flex flex-col h-full gap-4">
                    <div className="flex flex-col flex-1 px-4 py-8 overflow-hidden text-transparent transition-all duration-300 border border-gray-600 border-dashed rounded-lg backdrop-blur-lg bg-grid-squares-current hover:text-accent-10 gap-y-4 group hover:border-accent-50 hover:rounded-2xl">
                        <h1 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-accent">{t('f3')}</h1>
                        <p className="mb-4 text-sm font-light text-gray-300">{t('fd3')}</p>
                    </div>
                    <div className="flex flex-col flex-1 px-4 py-8 overflow-hidden text-transparent transition-all duration-300 border border-gray-600 border-dashed rounded-lg backdrop-blur-lg bg-grid-squares-current hover:text-accent-10 gap-y-4 group hover:border-accent-50 hover:rounded-2xl">
                        <h1 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-accent">{t('f5')}</h1>
                        <p className="mb-4 text-sm font-light text-gray-300">{t('fd5')}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyMeSection;