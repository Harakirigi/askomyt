interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    techs: string[];
    sourceLink?: string;
    previewLink?: string;
    fullDetails?: string;
    downloadable: boolean;
    filePath?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "StatGovParser",
        description: "A web-based dashboard for visualizing complex datasets with interactive charts.",
        image: "/portfolio/data-analysis.png",
        techs: ["python", "beautiful soup", "tkinter"],
        sourceLink: "https://github.com/Harakirigi/statGovParser",
        fullDetails:
            "This project is a comprehensive data analysis dashboard built with Next.js and React, utilizing Pandas for data processing and Chart.js for interactive visualizations. It allows users to upload datasets, apply filters, and generate real-time insights through dynamic charts. The application is optimized for performance and accessibility, with a responsive design that works across devices.",
        downloadable: true,
        filePath: '/products/statGovParser.exe',
    },
    {
        id: 2,
        title: "Secure Web App",
        description: "A secure web application with authentication and data encryption.",
        image: "/portfolio/secure-app.png",
        techs: ["elixir", "phoenix", "javascript"],
        sourceLink: "https://github.com/Harakirigi/secure-web-app",
        fullDetails:
            "The Secure Web App is built with Elixir and Phoenix, focusing on robust authentication and data encryption. It features JWT-based authentication, real-time updates with Phoenix Channels, and a clean, user-friendly interface. The app is designed to handle sensitive data securely, with comprehensive error handling and logging.",
        downloadable: false,
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "My personal portfolio showcasing my projects and skills.",
        image: "/portfolio/portfolio.png",
        techs: ["next.js", "react", "tailwind"],
        fullDetails:
            "This portfolio website, built with Next.js and Tailwind CSS, showcases my projects, skills, and contact information. It features internationalization with next-intl, responsive design, and smooth animations using AOS. The site is fully client-side, optimized for Vercel deployment, and includes accessible navigation and contact forms.",
        downloadable: false,
    },
];

export default projects;