import React from "react";
import { Link } from "../components/atoms/link";

export const frenchContent = {
  experiences: [
    {
      mainInfos: {
        status: "CDI",
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
        status: "Alternant",
        title: "Front-end developpeur Wizzmedia",
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
        title: "Front-end developpeur SNCF",
        explanation: (
          <>
            Nous avons développer un outils professionnel répondant aux
            problèmatiques des équipes de maintenance de la SNCF. Ces interfaces
            regroupait la gestions du parc ferroviaire, les opérations de
            maintenance en cours et future et les différents agenda des équipes.
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
  contact: {
    title: "Contact",
    contacts: {
      github: {
        label: "Github",
        content: "github.com/lacaux-gerome",
        url: "https://github.com/lacaux-gerome",
      },
      mail: {
        label: "Email",
        url: "&to=gerome.lacaux@hetic.net&su=Hello 👋🏻",
        content: "gerome.lacaux@hetic.net",
      },
      linkedin: {
        label: "Linkedin",
        url: "https://www.linkedin.com/in/gerome-lacaux/",
        content: "linkedin/gerome-lacaux",
      },
    },
  },
};
