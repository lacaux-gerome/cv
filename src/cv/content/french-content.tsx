import { Link } from "@/components/atoms/link";
import { LangData } from "@/content";
import { BulletList } from "@/components/atoms/bullet-list";

export const frenchContent: LangData = {
  mainTitle: "Curriculum vitae",
  experiences: [
    {
      mainInfos: {
        status: "CDI",
        title: "Senior Software Engineer chez Ouihelp",
        explanation: (
          <>
            Mon role évoluant avec les années chez Ouihelp, je suis maintenant,
            de la mise en place de bonnes pratiques, de l'architecture tout ceci
            faisant corps dans l'ajout de nouvelles fonctionnalité permettant de
            faire avancer le projet. <br />
            <br />
            <strong>
              Ci dessous quelques missions que je peux réaliser au quotidien :
            </strong>
            <BulletList
              items={[
                {
                  text: "Gestion de projet",
                },
                {
                  text: "Réalisation technique (feature)",
                },
                {
                  text: "Écriture de RFC",
                },
                {
                  text: "Code review",
                },
                {
                  text: "Pair programming",
                },
                {
                  text: "Architecture et lead sur un projet de Design system",
                },
              ]}
            ></BulletList>
          </>
        ),
      },
      additionalInfos: {
        date: "Mai 2020 - Aujourd'hui",
        technos: ["React", "React Native Expo", "Typescript"],
      },
    },
    {
      mainInfos: {
        status: "CDI",
        title: "Developpeur front-end chez Ouihelp",
        explanation: (
          <>
            En charge du developpement front-end des outils de Ouihelp.
            Back-office, site web et application mobile. <br /> Dans une équipe
            en croissance rapide, j'ai pu y évoluer autant techniquement
            qu'humainement.
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
            Intégré dans une équipe expérimentée et pluridisciplinaire, j'étais
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
        url: "&to=lacaux.g@gmail.com&su=Hello 👋🏻",
        content: "lacaux.g@gmail.com",
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
