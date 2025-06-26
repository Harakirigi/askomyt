interface CV {
    avatar: string;
    name: string;
    profession: string;
    bio: string;
    about: string;
    contacts: {
        phone: string;
        address: string;
        email: string;
        github: string;
        linkedin: string;
    };
    sections: Array<{
        id: number;
        title: string;
        items: Array<{
            id: number;
            year: string;
            title: string;
            shortDescription?: string;
            description?: string;
            isLink?: boolean;
            link?: string;
        }>;
    }>;
}

const cv: CV = {
    avatar: "/images/avatar-placeholder.png",
    name: "Asylbek Komyt",
    profession: "Data Analyst, Web Developer",
    bio: "19 y.o; from Astana, Kazakhstan",
    about:
        "I am a passionate FullStack Developer and Data Analyst with a strong foundation in Cybersecurity and Web Development. Currently pursuing a Bachelor's Degree at Astana IT University, I specialize in building scalable web applications and analyzing data to derive actionable insights. My goal is to create impactful solutions that blend technology and innovation.",
    contacts: {
        phone: "+77787050395",
        address: "Astana, Kazakhstan",
        email: "nkomyt2@gmail.com",
        github: "https://github.com/Harakirigi",
        linkedin: "https://linkedin.com/in/askomyt",
    },
    sections: [
        {
            id: 1,
            title: "Education",
            items: [
                {
                    id: 1,
                    year: "2021 - 2024",
                    title: "Computer Science Teacher",
                    shortDescription: "Pedagogical College",
                    description: "Studied the fundamentals of Computer Science and teaching methodologies.",
                },
                {
                    id: 2,
                    year: "2024 - Present",
                    title: "Bachelor's Degree in Cybersecurity",
                    shortDescription: "Astana IT University",
                    description: "Specializing in Cybersecurity and Web Development, focusing on secure application design.",
                },
            ],
        },
        {
            id: 2,
            title: "Work Experience",
            items: [
                {
                    id: 1,
                    year: "2025 - Present",
                    title: "Cybersecurity Engineer",
                    shortDescription: "MSSP Global",
                    description: "Developed secure web applications and conducted data analysis for threat detection.",
                },
            ],
        },
        {
            id: 3,
            title: "Contacts",
            items: [
                {
                    id: 1,
                    year: "phone",
                    title: "+77787050395",
                    isLink: true,
                    link: "+77787050395",
                },
                {
                    id: 2,
                    year: "email",
                    title: "nkomyt2@gmail.com",
                    isLink: true,
                    link: "nkomyt2@gmail.com",
                },
                {
                    id: 3,
                    year: "github",
                    title: "GitHub Profile",
                    isLink: true,
                    link: "https://github.com/Harakirigi",
                },
                {
                    id: 4,
                    year: "linkedin",
                    title: "LinkedIn Profile",
                    isLink: true,
                    link: "https://linkedin.com/in/askomyt",
                },
            ],
        },
    ],
};

export default cv;