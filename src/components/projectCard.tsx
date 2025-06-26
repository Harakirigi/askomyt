'use client'
import Image from "next/image"
import Button from "@components/button";
import AnchorButton from "./anchorButton";
import Tooltip from "@components/tooltip";
import { useState, useEffect } from "react";
import { ArrowUpRight, Download } from "lucide-react";

interface ProjectCard {
    title: string;
    description: string;
    image: string;
    techs: Array<string>;
    sourceLink?: string,
    previewLink?: string,
    fullDetails?: string;
    downloadable: boolean;
    filePath: string;
}

const ProjectCard = ({
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
            <div className="relative group w-[550px] h-max border border-accent-50 rounded-2xl overflow-hidden" data-aos="zoom-in-up" data-aos-offset="200" data-aos-duration="600" data-aos-easing="ease-out">
                <div className="relative w-full h-[150px]">
                    <Image
                        src={image}
                        alt={`${title}_image`}
                        fill
                        className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-[1.03]"
                        sizes="550px"
                    />
                </div>
                <div className="flex flex-col p-4 gap-y-3">
                    <div className="relative">
                        <Tooltip
                            content="Click for details!"
                            position="top"
                            delay={0.2}
                            showOnlyWhenDisabled
                            isParentDisabled={!!fullDetails}
                        >
                            <a
                                className="relative inline-block text-2xl font-semibold"
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
                            {fullDetails && <ArrowUpRight size={20} className="px-[2px]" />}
                        </Tooltip>
                    </div>
                    <div className="px-3 py-4 border border-transparent rounded-2xl bg-black-light">
                        <p className="text-base font-extralight">{description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {techs.map((tech, index) => (
                            <span key={index} className="px-2 py-1 text-sm capitalize transition-all duration-200 border rounded cursor-default select-none border-accent-50 hover:bg-accent-10">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <div className="flex gap-2">
                            <Tooltip
                                content="Source not available"
                                position="top"
                                delay={0.2}
                                showOnlyWhenDisabled
                                isParentDisabled={!sourceLink}
                            >
                                <AnchorButton
                                    variant="primaryOutline"
                                    href={sourceLink}
                                    disabled={!sourceLink}
                                >
                                    Source Code
                                </AnchorButton>
                            </Tooltip>

                            <Tooltip
                                content="Preview not available"
                                position="top"
                                delay={0.2}
                                showOnlyWhenDisabled
                                isParentDisabled={!previewLink}
                            >
                                <AnchorButton
                                    variant="accentOutline"
                                    href={previewLink}
                                    disabled={!previewLink}
                                >
                                    Preview
                                </AnchorButton>
                            </Tooltip>

                            {downloadable && (
                                <Tooltip
                                    content={
                                        !downloadable ? "Is not downloadable" :
                                            fileSize ? `Download (${fileSize})` : "Download file"
                                    }
                                    position="top"
                                    delay={0.2}
                                >
                                    <AnchorButton
                                        variant="accentOutline"
                                        href={filePath}
                                        disabled={!downloadable}
                                        icon={<Download />}
                                    >
                                        Download
                                    </AnchorButton>
                                </Tooltip>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard