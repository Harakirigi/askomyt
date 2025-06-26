'use client'
import HeroSection from "@components/sections/hero";
import MyPortfolioSection from "@components/sections/myPortfolio";
import TechStackSection from "@components/sections/techStack";

const HomePage: React.FC = () => {
    return (
        <>
            <div className="mx-[320px]">
                <HeroSection />
                <TechStackSection />
                <MyPortfolioSection />
            </div>
        </>
    );
};

export default HomePage;