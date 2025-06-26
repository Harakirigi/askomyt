interface CV {
    id: number;
    title: string;
    description: string;
    image: string;
    techs: string[];
    sourceLink?: string;
    previewLink?: string;
    fullDetails?: string;
}

const cv = {
    "avatar": "/images/avatar.png",
    "name": "Asylbek Komyt",
    "profession": "Data Analyst, Web Developer",
    "bio": "19 y.o; from Astana/Kazakhstan",
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    "contacts": {
        "phone": "+77787050395",
        "address": "Astana",
        "email": "nkomyt2@gmail.com",
        "github": "https://github.com/Harakirigi",
        "linkedin": "",
    },
    "sections": [
        {
            "id": 1,
            "title": "Education",
            "items": [
                {
                    "id": 1,
                    "year": "2021 - 2024",
                    "title": "Computer Science Teacher",
                    "shortDescription": "Pedagogical College",
                    "description": "Learned basics of Computer Science"
                },
                {
                    "id": 2,
                    "year": "2024 - Present",
                    "title": "Bachelor's Degree in Cybersecurity",
                    "shortDescription": "Astana IT University",
                    "description": "Specialized in Cybersecurity and Web Development"
                },
                {
                    "id": 3,
                    "year": "2024 - Present",
                    "title": "Bachelor's Degree in Cybersecurity",
                    "shortDescription": "Astana IT University",
                    "description": "Specialized in Cybersecurity and Web Development"
                },
            ]
        },
        {
            "id": 2,
            "title": "Work Experience",
            "items": [
                {
                    "id": 1,
                    "year": "2025 - Present",
                    "title": "Cybersecurity Engineer",
                    "shortDescription": "MSSP Global",
                    "description": "Specialized in Cybersecurity and Web Development"
                },
            ]
        },
        {
            "id": 3,
            "title": "Contacts",
            "items": [
                {
                    "id": 1,
                    "year": "phone",
                    "title": "+77787050395",
                    "isLink": true,
                    "link": "+77787050395",
                },
                {
                    "id": 2,
                    "year": "email",
                    "title": "nkomyt2@gmail.com",
                    "isLink": true,
                    "link": "nkomyt2@gmail.com",
                },
                {
                    "id": 3,
                    "year": "github",
                    "title": "https://github.com/Harakirigi",
                    "isLink": true,
                    "link": "https://github.com/Harakirigi",
                },
            ]
        }
    ]
}

export default cv