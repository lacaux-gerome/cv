import React, { createContext, useState } from "react";
import styled from "styled-components";
import { rem } from "polished";

import { color, space } from "../styles/const";
// Components
import { MainWrapper } from "./components/layout/main";
import { content, SupportedLanguage } from "./content";
import { RowExperience } from "./components/organism/row-experience";
import { RowEducation } from "./components/organism/row-education";
import { RowContact } from "./components/organism/row-contact";
import { Head } from "./components/organism/head";
import { LanguageChoice } from "./components/molecules/language-choice";

const HeadingDivider = styled.hr`
  height: ${rem(10)};
  width: 100%;
  position: sticky;
  top: 0;
  background-color: ${color.secondary.base};
`;
const ExperienceWrapper = styled.div`
  margin-top: ${space.xl};
`;

const Context = createContext({ language: "fr" });

const App = () => {
  const [chosenLanguage, setChosenLanguage] = useState<SupportedLanguage>("fr");
  const chosenContent = content[chosenLanguage];

  return (
    <Context.Provider value={{ language: chosenLanguage }}>
      <HeadingDivider />
      <MainWrapper>
        <LanguageChoice
          chosenLanguage={chosenLanguage}
          setChosenLanguage={setChosenLanguage}
        />
        <Head mainTitle={chosenContent.mainTitle} />
        <ExperienceWrapper>
          {chosenContent.experiences.map((experience, index) => (
            <RowExperience
              key={index}
              leftContent={experience.additionalInfos}
              rightContent={experience.mainInfos}
            />
          ))}
          <RowEducation {...chosenContent.education} />
          <RowContact {...chosenContent.contact} />
        </ExperienceWrapper>
      </MainWrapper>
    </Context.Provider>
  );
};

export default App;
