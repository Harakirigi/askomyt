'use client';
import { useTranslations } from 'next-intl';
import projects from '@lib/projects';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useAppContext } from '@contexts/appContext';
import { useEffect, useState } from 'react';
import Button from '@components/button';
import { ArrowLeftSquareIcon, Download } from 'lucide-react';

interface ProjectDetailPageProps {
    params: Promise<{ id: string }>;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ params }) => {
    const t = useTranslations('projectDetails');
    const { setHideHeader } = useAppContext();
    const [project, setProject] = useState<(typeof projects)[0] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const resolveParams = async () => {
            const { id } = await params;
            const foundProject = projects.find((p) => p.id.toString() === id);
            if (!foundProject) {
                notFound();
            }
            setProject(foundProject);
            setLoading(false);
        };
        resolveParams();
    }, [params]);

    useEffect(() => {
        setHideHeader(true);
        return () => {
            setTimeout(() => setHideHeader(false), 500);
        };
    }, [setHideHeader]);

    if (loading) {
        return (
            <section className="flex items-center justify-center bg-black w-dvw min-h-dvh">
                <p className="text-white">Loading...</p>
            </section>
        );
    }

    if (!project) {
        return null;
    }

    return (
        <section className="flex items-center justify-center overflow-x-hidden bg-black w-dvw min-h-dvh">
            <main className="flex flex-col max-w-[600px] min-w-[300px] py-8 px-4">
                <Button
                    variant="primaryOutline"
                    styles="text-xs mb-6"
                    icon={<ArrowLeftSquareIcon />}
                    onClick={() => window.location.href = '/'}
                    data-aos="fade-down"
                >
                    {t('back')}
                </Button>
                <h1 className="mb-4 text-3xl font-semibold text-white" data-aos="fade-down">{project.title}</h1>
                <div className="relative w-full h-[200px] mb-4" data-aos="fade-up">
                    <Image
                        src={project.image}
                        alt={`${project.title} image`}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 600px) 100vw, 600px"
                    />
                </div>
                <p className="mb-4 text-base font-light text-white-300" data-aos="fade-up">{project.fullDetails}</p>
                <div className="flex flex-wrap gap-2 mb-4" data-aos="fade-up">
                    {project.techs.map((tech, index) => (
                        <span key={index} className="px-2 py-1 text-sm capitalize border rounded border-accent-50 hover:bg-accent-10">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-x-4" data-aos="fade-up">
                    {project.sourceLink && (
                        <Button
                            variant="primaryOutline"
                            onClick={() => {
                                if (project.sourceLink) {
                                    window.location.href = project.sourceLink;
                                }
                            }}
                        >
                            {t('sourceCode')}
                        </Button>
                    )}
                    {project.previewLink && (
                        <Button
                            variant="accentOutline"
                            onClick={() => {
                                if (project.previewLink) {
                                    window.location.href = project.previewLink;
                                }
                            }}
                        >
                            {t('preview')}
                        </Button>
                    )}
                    {project.downloadable && project.filePath && (
                        <Button
                            variant="accentOutline"
                            icon={<Download />}
                            onClick={() => {
                                if (project.filePath) {
                                    window.location.href = project.filePath;
                                }
                            }}
                        >
                            {t('download')}
                        </Button>
                    )}
                </div>
            </main>
        </section>
    );
};

export default ProjectDetailPage;