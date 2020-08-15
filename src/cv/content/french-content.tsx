import React from "react";
import { LangData } from ".";

import { Link } from "../components/atoms/link";
import { List } from "cv/components/atoms/list";

export const frenchContent: LangData = {
  mainTitle: "Curriculum vitae",
  experiences: [
    {
      mainInfos: {
        status: "CDI",
        title: "Developpeur front-end chez Ouihelp",
        explanation: (
          <>
            <p>
              En charge du developpement front-end des outils de Ouihelp.
              Back-office, site web et application mobile. <br /> Dans une
              équipe en croissance rapide, j'ai pu y évoluer autant
              techniquement qu'humainement.
            </p>
            <br />
            <p>
              <strong>
                Ce que j'ai fais plus en détails{" "}
                <span aria-label="émojie lunette" role="img">
                  🧐
                </span>
                :{" "}
              </strong>
            </p>
            <List>
              <li>
                AB testing d'interface et mise en place d'analytics afin d'en
                mesurer les performances.
              </li>
              <li>
                Écriture de cadrages techniques et modélisation de solutions
                techniques via diagrames, schéma, RFC...
              </li>
              <li>
                Force de proposition d'évolution techniques forte dans les
                différents projets. Présentation à l'équipe via des supports
                types keynote afin d'accompagné l'équipe dans sa transtion.
              </li>
              <li>
                Intégration de maquettes sur Figma assurant la cross
                compatibilitée sur les différents navigateurs.
              </li>
              <li>
                Code review et organisation de la monté en compétences des
                nouveaux éléments de l'équipe
              </li>
            </List>
          </>
        ),
      },
      additionalInfos: {
        date: "Juillet 2018 - Aout 2020",
        technos: ["React", "React Native", "RxJS"],
      },
    },
    {
      mainInfos: {
        status: "Alternant",
        title: "Developpeur front-end chez Wizzmedia",
        explanation: (
          <>
            Intégré dans une équipe expérimentée et pluridisciplinaire, j'étais
            en charge d'intégrer et de développer les interfaces pour des
            clients comme{" "}
            <Link href="https://www.student-factory.com/fr">Vinci</Link>, ou{" "}
            <Link href="https://www.feed.co/">Feed</Link>
            <br />
            <p>
              <strong>
                Ce que j'ai fais plus en détails{" "}
                <span aria-label="émojie lunette" role="img">
                  🧐
                </span>
                :{" "}
              </strong>
            </p>
            <List>
              <li>
                Cadrage et estimation de temps d'intégration depuis les
                maquettes.
              </li>
              <li>
                Monté en compétence et réalisation rapide de sites divers allant
                de l'e commerce au site vitrine.
              </li>
              <li>
                Mise en place de CI de pair avec les chefs de projets afin
                d'échanger avec le client tout au long du développement
              </li>
            </List>
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
            <br />
            <p>
              <strong>
                Ce que j'ai fais plus en détails{" "}
                <span aria-label="émojie lunette" role="img">
                  🧐
                </span>
                :{" "}
              </strong>
            </p>
            <List>
              <li>Remonté UX/UI on plus proche des équipes</li>
              <li>
                Intégration d'interface puis tests unitaire, de scénario et end
                to end. Tout ceci afin d'assurer le bon fonctionnement dans le
                présent et dans le futur de celle ci.
              </li>
            </List>
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
        name: "HETIC, Bachelor Web",
      },
      {
        date: "2015 - 2016",
        name: "Aix-Marseille Université, Licence de Mathématiques supérieures",
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
