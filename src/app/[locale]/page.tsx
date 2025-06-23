import HeroSection from "@components/sections/hero";
import MyPortfolioSection from "@components/sections/myPortfolio";
import TechStackSection from "@components/sections/techStack";

import AOSInitializer from '@components/AOSInitializer';


const HomePage: React.FC = () => {
    return (
        <>
            <AOSInitializer />
            <div className="mx-[320px]">
                <HeroSection />
                <TechStackSection />
                <MyPortfolioSection />
            </div>
        </>
    );
};

export default HomePage;