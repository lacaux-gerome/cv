import { frenchContent } from "./french-content";
import { enContent } from "./english-content";

export type SupportedLanguage = "fr" | "en";

//
// --- Experience
//
export type ExperienceAdditionalInfosType = {
  title?: string;
  date: string;
  technos: string[];
};
export type ExperienceMainInfosType = {
  title: string;
  explanation: JSX.Element;
  status: string;
};

//
// --- Education
//
export type EducationType = {
  title: string;
  content: EducationContentType[];
};
export type EducationContentType = {
  name: string;
  date: string;
};

//
// --- Contact
//
export type ContactType = {
  title: string;
  contacts: ContactMap;
};
type ContactMap = Record<
  string,
  {
    label: string;
    url: string;
    content: string;
    explanation: string;
  }
>;

//
// --- Global
//
export type LangData = {
  mainTitle: string;
  experiences: {
    mainInfos: ExperienceMainInfosType;
    additionalInfos: ExperienceAdditionalInfosType;
  }[];
  education: EducationType;
  contact: ContactType;
};
type Content = Record<SupportedLanguage, LangData>;

export const content: Content = {
  fr: frenchContent,
  en: enContent,
};
