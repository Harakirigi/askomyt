'use client'
import Button from '@components/button';
import { useAppContext } from '@contexts/appContext';
import { ArrowLeftFromLine, ArrowLeftSquareIcon, Download } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import cv from "@lib/cv"

const CV: React.FC = () => {
    const { setHideHeader } = useAppContext();

    useEffect(() => {
        setHideHeader(true);
        return () => {
            setTimeout(() => setHideHeader(false), 500);
        };
    }, [setHideHeader]);

    return (
        <section className='flex items-center justify-center overflow-x-hidden bg-black w-dvw max-h-max'>
            <main className='flex flex-col max-w-[600px] min-w-[600px] h-dvh bg-black py-[32px] px-[32px]'>
                <div className='flex justify-between' data-aos="fade-down" data-aos-offset="-1000" data-aos-duration="400" data-aos-easing="ease-out">
                    <Button variant={'primaryOutline'} styles='text-xs' icon={<ArrowLeftSquareIcon />} onClick={() => window.location.href = '/'}>Back</Button>
                    <Button variant={'primaryText'} styles='text-xs' icon={<Download />}>Download CV</Button>
                    <button className='relative p-2 overflow-hidden text-xs font-medium border border-white rounded-lg group'>
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                            Cut it Down
                        </span>
                        <span className="absolute inset-0 transition-transform duration-300 ease-out origin-left transform scale-x-0 bg-white group-hover:scale-x-100"></span>
                    </button>
                </div>

                <div className='flex flex-row items-start justify-start py-[30px]' data-aos="fade-in" data-aos-offset="-1000" data-aos-duration="400" data-aos-easing="ease-out">
                    <div className='w-[100px] h-[100px] rounded-full overflow-hidden'>
                        <Image
                            src={cv.avatar}
                            alt='avatar_image'
                            width={100}
                            height={100}
                            className='object-cover w-full h-full'
                            style={{
                                aspectRatio: '1/1',
                            }}
                        />
                    </div>
                    <div className='flex flex-col py-[16px] px-[12px]'>
                        <p className='text-base font-semibold '>
                            {cv.name}
                        </p>
                        <p className='text-sm font-light '>
                            {cv.profession}
                        </p>
                        <p className='pt-2 text-sm font-thin'>
                            {cv.bio}
                        </p>
                    </div>
                </div>

                <div className=''>
                    <p className='py-4 font-sans text-base font-medium text-white capitalize' data-aos="fade-right" data-aos-offset="-1000" data-aos-duration="400" data-aos-easing="ease-out">
                        About
                    </p>
                    <p className='font-sans text-sm font-light capitalize text-white-300' data-aos="fade-in" data-aos-offset="-1000" data-aos-duration="400" data-aos-easing="ease-out">
                        {cv.about}
                    </p>
                </div>

                {cv.sections.map((section) => (
                    <div key={section.id} className=''>
                        <p className='py-4 font-sans text-base font-medium text-white capitalize' data-aos="fade-right" data-aos-offset="-1000" data-aos-duration="400" data-aos-easing="ease-out">
                            {section.title}
                        </p>
                        {section.items.map((item) => (
                        <div className='grid grid-cols-[1.4fr,3fr] p-2 -mx-2 rounded-lg group gap-6 border border-transparent hover:border-gray-600' key={item.id}>
                            <div className='py-2' data-aos="fade-right" data-aos-offset="-1000" data-aos-duration="400" data-aos-easing="ease-out">
                                <p className='font-sans text-sm font-light capitalize text-white-300'>
                                    {item.year}
                                </p>
                            </div>
                            <div className='py-2' data-aos="fade-left" data-aos-offset="-1000" data-aos-duration="400" data-aos-easing="ease-out">
                                <div>
                                    {item.isLink ? (
                                        <a href={item.link} className={`font-sans text-base font-normal text-white transition-all duration-300 ease-out group-hover:text-accent ${item.isLink && 'hover:underline cursor-pointer'}`}>
                                            {item.title}
                                        </a>
                                    ) : (
                                        <p className={`font-sans text-base font-normal text-white transition-all duration-300 ease-out group-hover:text-accent ${item.isLink && 'hover:underline cursor-pointer'}`}>
                                            {item.title}
                                        </p>
                                    )}
                                    <p className='font-sans text-sm font-light text-white-400'>
                                        {item.shortDescription}
                                    </p>
                                    <p className='pt-2 font-sans text-sm font-light text-white-200'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                ))}
                <div className='min-h-[50px] w-dvw'></div>
            </main>
        </section>
    )
}

export default CV