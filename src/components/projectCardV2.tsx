'use client'
import Image from "next/image"
import { useState, useEffect } from "react";
import { DownloadIcon, ExternalLink, Eye, Github } from "lucide-react";
import Tooltip from "@components/tooltip";

interface ProjectCard {
    title: string;
    description: string;
    image: string;
    techs: Array<string>;
    sourceLink?: string,
    previewLink?: string,
    fullDetails?: string;
    downloadable: boolean;
    filePath?: string;
}

const ProjectCardV2 = ({
    image = '/portfolio/title.png',
    title = 'Project Title',
    description = 'This is the description of the project',
    techs = ['react', 'css', 'python'],
    sourceLink,
    previewLink,
    fullDetails,
    downloadable,
    filePath,
}: ProjectCard) => {
    const [isHovered, setIsHovered] = useState(false);
    const [fileSize, setFileSize] = useState<string | null>(null);

    useEffect(() => {
        if (downloadable && filePath) {
            const fetchFileSize = async () => {
                try {
                    const response = await fetch(filePath, { method: 'HEAD' });
                    if (response.ok) {
                        const size = response.headers.get('content-length');
                        if (size) {
                            const sizeInKB = Math.round(parseInt(size) / 1024);
                            const displaySize = sizeInKB > 1024
                                ? `${(sizeInKB / 1024).toFixed(1)} MB`
                                : `${sizeInKB} KB`;
                            setFileSize(displaySize);
                        }
                    }
                } catch (error) {
                    console.error("Failed to fetch file size:", error);
                }
            };

            fetchFileSize();
        }
    }, [downloadable, filePath]);

    return (
        <>
            <div className="flex-1 pt-10 pb-14 group">
                <div className="relative flex-1 p-4 border border-dashed border-black-dark bg-black-lighter rounded-2xl">
                    <div className="relative w-full border border-secondary rounded-xl h-[100px] max-w-[calc(100%-60px)]">
                        <Image
                            src={image}
                            alt={`${title}_image`}
                            fill
                            className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-[1.03]"
                            sizes="550px"
                        />
                    </div>
                    <div className="flex flex-col p-4 text-white gap-y-2">
                        <div className="relative">
                            <Tooltip
                                content="Click for details!"
                                position="top"
                                delay={0.2}
                                showOnlyWhenDisabled
                                isParentDisabled={!!fullDetails}
                            >

                                <a
                                    className="relative inline-block text-xl font-semibold"
                                    href={fullDetails}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    {title}
                                    <span className={`
                                        absolute left-0 -bottom-1 w-full h-0.5 bg-white
                                        transition-all duration-500 ease-in-out
                                        ${isHovered && fullDetails ? 'opacity-100' : 'opacity-0'}
                                        `}
                                        style={{
                                            transform: isHovered && fullDetails ? 'scaleX(1)' : 'scaleX(0)',
                                            transformOrigin: 'left center',
                                        }}
                                    />
                                </a>
                            </Tooltip>
                        </div>
                        <div className="py-1">
                            <p className="text-base text-white-300 font-extralight">{description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {techs.map((tech, index) => (
                                <span key={index} className="px-2 py-1 text-sm capitalize transition-all duration-200 border rounded cursor-default select-none border-accent-50 hover:bg-accent-10">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    {sourceLink && (
                        <Tooltip
                            content="Source Code"
                            position="top"
                            childAbsolute
                            delay={0.2}
                        >
                            <div onClick={() => window.open(sourceLink, "_blank", "noopener,noreferrer")} className="absolute px-3 overflow-hidden group/inner text-gray-400 py-2 -ml-4 transition-all duration-200 border border-gray-500 shadow-[2px_5px_15px_0px] cursor-pointer translate-y-9 rounded-xl bg-black-light group-hover:translate-x-6 group-hover:-translate-y-1 hover:bg-black hover:text-white shadow-transparent hover:border-accent hover:shadow-accent-50 pr-7">
                                <span className="flex gap-2">
                                    <Github width={20} height={20} />
                                    <a className="text-sm">{sourceLink.slice(0, 30)}...</a>
                                    <ExternalLink width={15} height={15} className="absolute opacity-0 right-10 top-10 group-hover/inner:opacity-100 group-hover/inner:right-2 group-hover/inner:top-2.5 transition-all duration-200" />
                                </span>
                            </div>
                        </Tooltip>

                    )}
                    {downloadable && (
                            <div onClick={() => window.open(filePath, "_blank", "noopener,noreferrer")} className="absolute flex items-center justify-center px-3 py-2 text-gray-400 transition-all duration-200 border shadow-[2px_5px_15px_0px] border-gray-500 cursor-pointer aspect-square top-4 right-4 rounded-xl bg-black-light group-hover:-translate-y-6 group-hover:rotate-12 hover:bg-black hover:text-white shadow-transparent hover:border-accent hover:shadow-accent-50">
                                <span className="gap-2 cursor-pointer">
                                    <DownloadIcon width={20} height={20} />
                                </span>
                            </div>
                    )}
                    {previewLink && (
                        <div onClick={() => window.open(previewLink, "_blank", "noopener,noreferrer")} className="absolute flex items-center justify-center px-3 py-2 text-gray-400 transition-all duration-200 border shadow-[2px_5px_15px_0px] border-gray-500 cursor-pointer aspect-square top-4 right-4 rounded-xl bg-black-light group-hover:-translate-y-6 group-hover:rotate-12 hover:bg-black hover:text-white shadow-transparent hover:border-accent hover:shadow-accent-50">
                            <span className="gap-2 cursor-pointer">
                                <Eye width={20} height={20} />
                            </span>
                        </div>
                    )}
                </div>


            </div>
        </>
    )
}

export default ProjectCardV2