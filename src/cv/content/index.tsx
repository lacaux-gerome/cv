import React from "react";
import { Link } from "../components/atoms/link";

type SupportedLanguage = "fr";
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
// --- Global
//
type Data = {
  experiences: {
    mainInfos: ExperienceMainInfosType;
    additionalInfos: ExperienceAdditionalInfosType;
  }[];
  education: EducationType;
};
type Content = Record<SupportedLanguage, Data>;

export const content: Content = {
  fr: {
    experiences: [
      {
        mainInfos: {
          title: "Front-end developpeur Ouihelp",
          explanation: (
            <>
              En charge du developpement front-end des outils de Ouihelp.
              BackOffice, site web et application mobile.\n Dans une équipe en
              croissance rapide
            </>
          ),
        },
        additionalInfos: {
          date: "Juillet 2018 - Mai 2020",
          technos: ["React", "React Native", "RxJS"],
        },
      },
      {
        mainInfos: {
          title: "Front-end developpeur Wizzmedia",
          explanation: (
            <>
              Intégré dans une équipe expériementé et pluridisciplinaires
              j'étais en charge d'intégrer et de développer les interfaces pour
              des clients comme{" "}
              <Link href="https://www.student-factory.com/fr">Vinci</Link>, ou{" "}
              <Link href="https://www.feed.co/">Feed</Link>
            </>
          ),
        },
        additionalInfos: {
          date: "Octobre 2017 - Juillet 2018",
          technos: ["VueJS", "Magento", "Wordpress"],
        },
      },
      {
        mainInfos: {
          title: "Front-end developpeur SNCF",
          explanation: (
            <>
              Nous avons développer un outils professionnel répondant aux
              problèmatiques des équipes de maintenance de la SNCF. Ces
              interfaces regroupait la gestions du parc ferroviaire, les
              opérations de maintenance en cours et future et les différents
              agenda des équipes.
            </>
          ),
        },
        additionalInfos: {
          date: "Octobre 2017 - Juillet 2018",
          technos: ["AngularJS", "NodeJS"],
        },
      },
    ],
    education: {
      title: "Education",
      content: [
        {
          date: "2016 - 2019",
          name: "Hétic, Bachelor Web",
        },
        {
          date: "2015 - 2016",
          name: "Aix-Marseille Université, Mathématique suppérieur",
        },
      ],
    },
  },
};
