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
        title: "1-title",
        description: "1-desc",
        image: "1-image",
        techs: ["python", "beautiful soup", "tkinter"],
        sourceLink: "https://github.com/Harakirigi/statGovParser",
        fullDetails: "1-full",
        downloadable: true,
        filePath: '/products/statGovParser.exe',
    },
    {
        id: 2,
        title: "2-title",
        description: "2-desc",
        image: "2-image",
        techs: ["python", "beautiful soup", "tkinter"],
        sourceLink: "https://github.com/Harakirigi/statGovParser",
        fullDetails: "2-full",
        downloadable: true,
        filePath: '/products/statGovParser.exe',
    },
    {
        id: 3,
        title: "3-title",
        description: "3-desc",
        image: "3-image",
        techs: ["python", "beautiful soup", "tkinter"],
        sourceLink: "https://github.com/Harakirigi/statGovParser",
        fullDetails: "3-full",
        downloadable: true,
        filePath: '/products/statGovParser.exe',
    },
    {
        id: 4,
        title: "4-title",
        description: "4-desc",
        image: "4-image",
        techs: ["python", "beautiful soup", "tkinter"],
        sourceLink: "https://github.com/Harakirigi/statGovParser",
        fullDetails: "4-full",
        downloadable: true,
        filePath: '/products/statGovParser.exe',
    },
    {
        id: 5,
        title: "5-title",
        description: "5-desc",
        image: "5-image",
        techs: ["python", "beautiful soup", "tkinter"],
        sourceLink: "https://github.com/Harakirigi/statGovParser",
        fullDetails: "5-full",
        downloadable: true,
        filePath: '/products/statGovParser.exe',
    },
    {
        id: 6,
        title: "6-title",
        description: "6-desc",
        image: "6-image",
        techs: ["python", "beautiful soup", "tkinter"],
        sourceLink: "https://github.com/Harakirigi/statGovParser",
        fullDetails: "6-full",
        downloadable: true,
        filePath: '/products/statGovParser.exe',
    },
];

export default projects;