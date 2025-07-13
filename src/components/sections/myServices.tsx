'use client';
import { useTranslations } from 'next-intl';
import { CogIcon, GitGraph } from 'lucide-react';

const MyServicesSection: React.FC = () => {
    return (
        <section className="flex flex-col bg-black min-h-64 gap-y-10">
            <p className="text-5xl font-medium text-transparent uppercase bg-clip-text bg-gradient-to-t from-gray-300 to-gray-400">Services I create</p>
            <div className="relative flex gap-8 items-stretch min-h-[728px]">
                {/* Left Side - now properly stretching */}
                <div className='flex flex-col h-full border border-accent-10 w-96'>
                    <div className='flex flex-col h-full space-y-6'> {/* Changed to h-full */}
                        <button className='flex items-start gap-4 p-6 text-left transition border rounded-lg bg-black-lighter border-border hover:bg-black-lighter/50'>
                            <GitGraph color='#fff' />
                            <div className='flex-grow'>
                                <h3 className='text-base font-semibold text-white'>Header</h3>
                                <p className='mt-1 text-sm text-white-500'>I build perfect thingsbuild perfect thingsbuild perfect thingsbuild perfect thingsbuild perfect things</p>
                            </div>
                        </button>
                        <button className='flex items-start gap-4 p-6 text-left transition border rounded-lg bg-black-lighter border-border hover:bg-black-lighter/50'>
                            <GitGraph color='#fff' />
                            <div className='flex-grow'>
                                <h3 className='text-base font-semibold text-white'>Header</h3>
                                <p className='mt-1 text-sm text-white-500'>I build perfect things</p>
                            </div>
                        </button>
                        <button className='flex items-start gap-4 p-6 text-left transition border rounded-lg bg-black-lighter border-border hover:bg-black-lighter/50'>
                            <GitGraph color='#fff' />
                            <div className='flex-grow'>
                                <h3 className='text-base font-semibold text-white'>Header</h3>
                                <p className='mt-1 text-sm text-white-500'>I build perfect things</p>
                            </div>
                        </button>
                        <button className='flex items-start gap-4 p-6 text-left transition border rounded-lg bg-black-lighter border-border hover:bg-black-lighter/50'>
                            <GitGraph color='#fff' />
                            <div className='flex-grow'>
                                <h3 className='text-base font-semibold text-white'>Header</h3>
                                <p className='mt-1 text-sm text-white-500'>I build perfect things</p>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Right Side - now matching left side height */}
                <div className='flex flex-col flex-1 h-full'> {/* Added h-full */}
                    <div className='flex flex-col h-full overflow-hidden border border-white shadow-lg bg-black-dark rounded-2xl'> {/* Added h-full */}
                        {/* Header */}
                        <div className='relative flex-shrink-0 p-6 border-b border-border'>
                            <div>
                                <h1 className='text-lg font-bold'>Header</h1>
                                <p className='mt-1 text-sm text-muted-foreground'>About this header</p>
                            </div>
                            <div>
                                <CogIcon color='#fff' />
                            </div>
                        </div>

                        {/* Spans */}
                        <div className='flex flex-wrap flex-shrink-0 gap-2 px-6 py-4 border-b bg-muted/50 border-border'>
                            <span className='px-2 py-1 text-xs text-white border rounded-full border-accent bg-accent-10'>Python</span>
                            <span className='px-2 py-1 text-xs text-white border rounded-full border-accent bg-accent-10'>Java Script</span>
                            <span className='px-2 py-1 text-xs text-white border rounded-full border-accent bg-accent-10'>C++</span>
                        </div>

                        {/* Body */}
                        <div className='flex-grow p-4 overflow-hidden'>
                            <div className='relative flex w-full h-full'> {/* Changed to h-full */}
                                {/* Content here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyServicesSection;