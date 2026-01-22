import homepageData from '@/data/homepage.json';
import peopleData from '@/data/people.json';
import newsData from '@/data/news.json';
import publicationsData from '@/data/publications.json';
import aboutPiData from '@/data/about-pi.json';
import openingsData from '@/data/openings.json';
import softwareData from '@/data/software.json';
import contactData from '@/data/contact.json';

import type {
  HomepageData,
  PeopleData,
  NewsData,
  PublicationsData,
  AboutPIData,
  OpeningsData,
  SoftwareData,
  ContactData,
} from '@/types';

// Homepage data
export function getHomepageData(): HomepageData {
  return homepageData as HomepageData;
}

// People data
export function getPeopleData(): PeopleData {
  return peopleData as PeopleData;
}

// News data
export function getNewsData(): NewsData {
  return newsData as NewsData;
}

// Publications data
export function getPublicationsData(): PublicationsData {
  return publicationsData as PublicationsData;
}

// About PI data
export function getAboutPIData(): AboutPIData {
  return aboutPiData as AboutPIData;
}

// Openings data
export function getOpeningsData(): OpeningsData {
  return openingsData as OpeningsData;
}

// Software data
export function getSoftwareData(): SoftwareData {
  return softwareData as SoftwareData;
}

// Contact data
export function getContactData(): ContactData {
  return contactData as ContactData;
}

