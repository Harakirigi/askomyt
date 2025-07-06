'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from 'next-intl';
import TechIcon from "../techIcon";

interface TechStack {
    name: string;
    icon: string;
    accentIcon: string;
}

const TechStackSection: React.FC = () => {
    const t = useTranslations('techStack');
    const [currentStack, setCurrentStack] = useState<string>(t('everything'));
    const techStacks: TechStack[] = [
        { name: "next.js", icon: "/icons/next-icon.svg", accentIcon: "/icons/next-icon-accent.svg" },
        { name: "react", icon: "/icons/react-icon.svg", accentIcon: "/icons/react-icon-accent.svg" },
        { name: "tailwind", icon: "/icons/tailwind-icon.svg", accentIcon: "/icons/tailwind-icon-accent.svg" },
        { name: "elixir", icon: "/icons/elixir-icon.svg", accentIcon: "/icons/elixir-icon-accent.svg" },
        { name: "phoenix", icon: "/icons/phoenix-icon.svg", accentIcon: "/icons/phoenix-icon-accent.svg" },
        { name: "node.js", icon: "/icons/node-icon.svg", accentIcon: "/icons/node-icon-accent.svg" },
        { name: "javascript", icon: "/icons/js-icon.svg", accentIcon: "/icons/js-icon-accent.svg" },
        { name: "python", icon: "/icons/python-icon.svg", accentIcon: "/icons/python-icon-accent.svg" },
        { name: "numpy", icon: "/icons/numpy-icon.svg", accentIcon: "/icons/numpy-icon-accent.svg" },
        { name: "pandas", icon: "/icons/pandas-icon.svg", accentIcon: "/icons/pandas-icon-accent.svg" },
        { name: "figma", icon: "/icons/figma-icon.svg", accentIcon: "/icons/figma-icon-accent.svg" },
    ];

    return (
        <section className="flex flex-row items-center justify-between h-40 bg-black gap-y-6 w-dvh">
            <div className="flex flex-col items-center justify-center" data-aos="fade-right" data-aos-offset="100" data-aos-duration="600" data-aos-easing="ease-out">
                <div className="relative h-12">
                    <p className="text-5xl font-medium text-gray-300 uppercase">{t('iBuildWith')}</p>
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={currentStack}
                            className="absolute text-5xl font-medium text-gray-300 uppercase"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.15, ease: "easeInOut" }}
                        >
                            {currentStack}
                        </motion.p>
                    </AnimatePresence>
                </div>
            </div>
            <div className="relative flex flex-row items-end pt-10 group gap-x-4" data-aos="fade-left" data-aos-offset="120" data-aos-duration="600" data-aos-easing="ease-out">
                {techStacks.map((tech) => (
                    <TechIcon
                        key={tech.name}
                        name={tech.name}
                        icon={tech.icon}
                        accentIcon={tech.accentIcon}
                        setCurrentStack={setCurrentStack}
                        defaultText={t('everything')}
                    />
                ))}
            </div>
        </section>
    );
};

export default TechStackSection;