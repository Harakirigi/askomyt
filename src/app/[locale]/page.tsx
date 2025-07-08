'use client'
import HeroSection from "@components/sections/hero";
import MyPortfolioSection from "@components/sections/myPortfolio";
import TechStackSection from "@components/sections/techStack";
import WhyMeSection from "@components/sections/whyMe";

const HomePage: React.FC = () => {
    return (
        <>
            <div className="flex flex-col PC:mx-[320px] responsive:mx-auto responsive:max-w-[90%]">
                <HeroSection />
                <TechStackSection />
                <div className="h-[300px]"></div>
                <WhyMeSection />
                <MyPortfolioSection />
            </div>
        </>
    );
};

export default HomePage;