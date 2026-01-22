// ==================== Homepage Types ====================

export interface ResearchInterest {
  id: string;
  title: string;
  description: string;
  image: string;
  color: 'blue' | 'green' | 'purple';
}

export interface RecentPublication {
  id: string;
  title: string;
  authors: string;
  year: string;
  journal: string;
  volume: string;
  pages: string;
  image: string;
  link: string;
  note?: string;
}

export interface LabNewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  isRecruiting: boolean;
  link: string;
}

export interface HomepageData {
  backgroundImage: string;
  heroTitle: string;
  heroSubtitle: string;
  welcomeTitle: string;
  welcomePoints: string[];
  researchInterests: ResearchInterest[];
  recentPublications: RecentPublication[];
  labNews: LabNewsItem[];
}

// ==================== About PI Types ====================

export interface Affiliation {
  role: string;
  institution: string;
  link?: string;
}

export interface ContactInfo {
  officeAddress: string;
  labAddress: string;
  phone: string;
}

export interface EducationItem {
  id: string;
  period: string;
  position: string;
  institution: string;
  details?: string[];
}

export interface PresentationItem {
  id: string;
  conference: string;
  location: string;
  topic: string;
}

export interface LectureItem {
  id: string;
  institution: string;
  topic: string;
}

export interface CourseItem {
  id: string;
  name: string;
  semester: string;
  note?: string;
}

export interface AboutPIData {
  photo: string;
  name: string;
  affiliations: Affiliation[];
  contact: ContactInfo;
  briefBio: string[];
  education: EducationItem[];
  honors: string[];
  presentations: PresentationItem[];
  lectures: LectureItem[];
  courses: CourseItem[];
}

// ==================== People Types ====================

export interface TeamMember {
  id: string;
  name: string;
  title?: string;
  degree?: string;
  category: 'admin' | 'postdoc' | 'phd' | 'master' | 'undergraduate' | 'alumni';
  photo: string;
  intro: string;
  email?: string;
  joinYear?: number;
  graduationYear?: number;
  currentPosition?: string; // For alumni
}

export interface JoinTeamSection {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface PeopleData {
  members: TeamMember[];
  joinTeam: JoinTeamSection;
}

// ==================== Publications Types ====================

export interface Publication {
  id: string;
  authors: string; // Contains markers like #, *, underline
  title: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  link: string;
  note?: string; // e.g., "ESI highly cited paper"
  noteLinks?: { text: string; url: string }[];
  isHighlighted?: boolean;
}

export interface PublicationsLegend {
  coFirst: string;
  corresponding: string;
}

export interface PublicationsData {
  legend: PublicationsLegend;
  publications: Publication[];
}

// ==================== News Types ====================

export interface NewsLink {
  text: string;
  url: string;
}

export interface NewsArticle {
  id: string;
  date: string;
  title: string;
  content: string;
  category: 'lab-news' | 'publication' | 'award' | 'conference';
  images: string[];
  links?: NewsLink[];
}

export interface NewsData {
  articles: NewsArticle[];
}

// ==================== Openings Types ====================

export interface HowToApply {
  email: string;
  subjectLine: string;
  requiredMaterials: string[];
}

export interface Position {
  id: string;
  type: 'postdoc' | 'phd' | 'research-assistant' | 'intern';
  title: string;
  subtitle?: string;
  badge?: string;
  location?: string;
  workType?: string; // 'On-site', 'Remote', 'Hybrid'
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  howToApply: HowToApply;
  isActive: boolean;
}

export interface OpeningsData {
  pageTitle: string;
  positions: Position[];
  footerNote: string;
}

// ==================== Software Types ====================

export interface Software {
  id: string;
  name: string;
  description: string;
  status: 'released' | 'coming-soon' | 'beta';
  link?: string;
  github?: string;
  documentation?: string;
  features?: string[];
}

export interface SoftwareData {
  pageTitle: string;
  pageSubtitle: string;
  software: Software[];
  comingSoonMessage: string;
}

// ==================== Contact Types ====================

export interface AddressInfo {
  room: string;
  building: string;
  university: string;
  district: string;
  city: string;
  country: string;
}

export interface SocialLinks {
  googleScholar?: string;
  github?: string;
  twitter?: string;
}

export interface ContactData {
  pageTitle: string;
  email: string;
  phone?: string;
  address: {
    office: AddressInfo;
    lab: AddressInfo;
  };
  mapEmbedUrl?: string;
  socialLinks?: SocialLinks;
}

