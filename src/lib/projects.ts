interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    techs: string[];
    sourceLink?: string;
    previewLink?: string;
    fullDetails?: string;
    downloadable?: boolean;
    filePath?: string;
}

const projects: Project[] = [
    {
        "id": 1,
        "title": "statGovParser",
        "description": "StatGovParser - application that can parse and download xlsx, json and csv files from stat.gov.kz website.",
        "image": "/images/projects/statGovParser.png",
        "techs": ['python', 'beautiful soup'],
        "sourceLink": "https://github.com/example/source",
        "previewLink": "https://example.com/demo",
        "fullDetails": "/stat-gov-parser",
        "downloadable": true,
        "filePath": '/products/statGovParser.exe'
    },
    {
        "id": 2,
        "title": "statGovParser",
        "description": "fdsklafksdl",
        "image": "/statGovParser.png",
        "techs": ['python', 'beautiful soup'],
    },
    {
        "id": 3,
        "title": "statGovParser",
        "description": "fdsklafksdl",
        "image": "/statGovParser.png",
        "techs": ['python', 'beautiful soup'],
    },
    {
        "id": 4,
        "title": "statGovParser",
        "description": "fdsklafksdl",
        "image": "/statGovParser.png",
        "techs": ['python', 'beautiful soup'],
    },
]

export default projects