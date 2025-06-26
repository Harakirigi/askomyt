export const scrollToSection = (here: string) => {
    document.getElementById(here).scrollIntoView({ behavior: 'smooth' });
};