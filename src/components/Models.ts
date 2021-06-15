export interface PersonalInfo {
    name: string;
    headline: string;
    picture: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    twitter: string;
    location_1: string;
    location_2: string;
}

export interface AboutMe {
    label: string;
    descriptions: string;
}

export interface Work {
    company: string;
    position: string;
    start_period: string;
    end_period: string;
    location: string;
    descriptions: string[];
}

export interface ExtraCurricular {
    institution: string;
    position: string;
    start_period: string;
    end_period: string;
    location: string;
    descriptions: string[];
}

export interface Project {
    title: string;
    link: string;
    start_period: string;
    end_period: string;
    descriptions: string;
}

export interface WorkExperience {
    label: string;
    lists: Work[];
}

export interface ExtraCurricularExperience {
    label: string;
    lists: ExtraCurricular[];
}

export interface Projects {
    label: string;
    lists: Project[];
}

export interface School {
    institution: string;
    major: string;
    level: string;
    gpa: string;
    start_period: string;
    end_period: string;
    location: string;
    descriptions: string[];
}

export interface Education {
    label: string;
    lists: School[];
}

export interface Skills {
    label: string;
    descriptions: string[];
}

export interface Language {
    language: string;
    fluency: number;
}

export interface Languages {
    label: string;
    descriptions: Language[];
}

export interface MainSection {
    about_me: AboutMe;
    work_experience: WorkExperience;
    education: Education;
    skills: Skills;
    languages: Languages;
    extracurricular: ExtraCurricularExperience;
    projects: Projects;
}

export interface RootObject {
    personal_info: PersonalInfo;
    main_section: MainSection;
}
