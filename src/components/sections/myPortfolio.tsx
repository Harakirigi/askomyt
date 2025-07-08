import projects from "@lib/projects"
import ProjectCard from "@components/projectCard"
import Button from "@components/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';

const MyPortfolioSection: React.FC = () => {
    const t = useTranslations('myPortfolio');

    return (
        <section id="portfolio" className="flex flex-col items-start justify-end h-auto mt-32 bg-black gap-y-6 w-dvh">
            <div className="flex flex-row justify-between w-full my-2">
                <h1 className="text-4xl font-semibold text-gray-300 text-start" data-aos="fade-right" data-aos-offset="100" data-aos-duration="600" data-aos-easing="ease-out">{t('title')}</h1>
                <div data-aos="fade-left" data-aos-offset="100" data-aos-duration="600" data-aos-easing="ease-out">
                    <Button
                        variant="primaryText"
                        styles="group"
                        icon={<ArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-[6px]" />}
                        onClick={() => window.location.href = '/projects'}
                    >
                        {t('showAll')}
                    </Button>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-between w-full gap-y-12">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
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
        </section>
    );
};

export default MyPortfolioSection;