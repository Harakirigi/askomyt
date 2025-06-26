'use client';
import { useTranslations } from 'next-intl';
import projects from '@lib/projects';
import ProjectCard from '@components/projectCard';
import Button from '@components/button';
import { ArrowLeftSquareIcon } from 'lucide-react';
import { useAppContext } from '@contexts/appContext';
import { useEffect } from 'react';

const ProjectsPage: React.FC = () => {
  const t = useTranslations('myWorks');
  const { setHideHeader } = useAppContext();

  useEffect(() => {
    setHideHeader(true);
    return () => {
      setTimeout(() => setHideHeader(false), 500);
    };
  }, [setHideHeader]);

  return (
    <section className="flex flex-col items-center justify-center py-8 bg-black w-dvw min-h-dvh">
      <main className="flex flex-col max-w-[1200px] min-w-[300px] px-4">
        <Button
          variant="primaryOutline"
          styles="text-xs mb-6"
          icon={<ArrowLeftSquareIcon />}
          onClick={() => window.location.href = '/'}
          data-aos="fade-down"
        >
          {t('back')}
        </Button>
        <h1 className="mb-6 text-4xl font-semibold text-gray-300" data-aos="fade-right" data-aos-offset="100" data-aos-duration="600">
          {t('title')}
        </h1>
        <div className="flex flex-row flex-wrap justify-between w-full gap-y-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              techs={project.techs}
              sourceLink={project.sourceLink}
              previewLink={project.previewLink}
              fullDetails={project.fullDetails}
              downloadable={project.downloadable}
              filePath={project.filePath}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default ProjectsPage;