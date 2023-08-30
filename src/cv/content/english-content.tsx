import { Link } from "@/components/atoms/link";

export const enContent = {
  mainTitle: "Resume",
  experiences: [
    {
      mainInfos: {
        status: "Permanent contract",
        title: "Front end Developper at Ouihelp",
        explanation: (
          <>
            I was in charge of the front-end development for internals tools at
            Ouihelp. The backOffice, the website and the mobile application.{" "}
            <br /> In fast a growing team i could technicaly and humanly evolved
            very fast. Interfaces are used by hundreds of caregivers and
            managers everyday.
          </>
        ),
      },
      additionalInfos: {
        date: "July 2018 - May 2020",
        technos: ["React", "React Native", "RxJS"],
      },
    },
    {
      mainInfos: {
        status: "Apprentice",
        title: "Front end Developper at Wizzmedia",
        explanation: (
          <>
            Inside an experimented and multidisciplinary team. My job was to
            intergrate and develop interfaces for clients like
            <Link href="https://www.student-factory.com/fr">Vinci</Link>, or{" "}
            <Link href="https://www.feed.co/">Feed</Link>. This experience bring
            me a good sense of details and an good feeling with product and QA
            owner.
          </>
        ),
      },
      additionalInfos: {
        date: "October 2017 - July 2018",
        technos: ["VueJS", "Magento", "Wordpress"],
      },
    },
    {
      mainInfos: {
        status: "Intern",
        title: "Front end Developper at SNCF",
        explanation: (
          <>
            We have developed a professional tool that meets the needs of
            problems of SNCF maintenance teams. Tool now used by more than 200
            technicians on a daily basis.
          </>
        ),
      },
      additionalInfos: {
        date: "October 2017 - July 2018",
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
        name: "Aix-Marseille Université, Advanced Mathematics",
      },
    ],
  },
  contact: {
    title: "Contact",
    contacts: {
      github: {
        explanation: "to see how i code",
        label: "Github",
        content: "github.com/lacaux-gerome",
        url: "https://github.com/lacaux-gerome",
      },
      mail: {
        explanation: "to contact me",
        label: "Email",
        url: "&to=lacaux.g@gmail.com&su=Hello 👋🏻",
        content: "lacaux.g@gmail.com",
      },
      linkedin: {
        explanation: "to get more informations about me",
        label: "Linkedin",
        url: "https://www.linkedin.com/in/gerome-lacaux/",
        content: "linkedin/gerome-lacaux",
      },
    },
  },
};
