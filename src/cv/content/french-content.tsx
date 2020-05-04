import React from "react";
import { Link } from "../components/atoms/link";
import { LangData } from ".";

export const frenchContent: LangData = {
  mainTitle: "Curriculum vitae",
  experiences: [
    {
      mainInfos: {
        status: "CDI",
        title: "Developpeur front-end chez Ouihelp",
        explanation: (
          <>
            En charge du developpement front-end des outils de Ouihelp.
            BackOffice, site web et application mobile. <br /> Dans une équipe
            en croissance rapide j'ai pu évolué autant techniquement que
            humainement.
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
        status: "Alternant",
        title: "Developpeur front-end chez Wizzmedia",
        explanation: (
          <>
            Intégré dans une équipe expériementé et pluridisciplinaires j'étais
            en charge d'intégrer et de développer les interfaces pour des
            clients comme{" "}
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
        status: "Stage",
        title: "Developpeur front-end à la SNCF",
        explanation: (
          <>
            Nous avons développé un outil professionnel répondant aux
            problématiques des équipes de maintenance de la SNCF. Outil
            maintenant utilisé par plus 200 techniciens au quotidien.
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
    title: "Formation",
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
  contact: {
    title: "Contact",
    contacts: {
      github: {
        explanation: "pour voir comment je code",
        label: "Github",
        content: "github.com/lacaux-gerome",
        url: "https://github.com/lacaux-gerome",
      },
      mail: {
        explanation: "pour me contacter",
        label: "Email",
        url: "&to=gerome.lacaux@hetic.net&su=Hello 👋🏻",
        content: "gerome.lacaux@hetic.net",
      },
      linkedin: {
        explanation: "pour en savoir plus sur mon parcours",
        label: "Linkedin",
        url: "https://www.linkedin.com/in/gerome-lacaux/",
        content: "linkedin/gerome-lacaux",
      },
    },
  },
};
