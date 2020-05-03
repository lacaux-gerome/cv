import React from "react";
import styled from "styled-components";

import { rem } from "polished";
import "./App.css";
import { color, space } from "../styles/const";
import { MainWrapper } from "./components/layout/main";
import { Title } from "./components/atoms/title";
import { ContentWrapper } from "./components/layout/content";
import { content } from "./content";

import { RowExperience } from "./components/organism/row-experience";
import { RowEducation } from "./components/organism/row-education";
import { RowContact } from "./components/organism/row-contact";

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

export const App = () => {
  return (
    <>
      <HeadingDivider />
      <MainWrapper>
        <Head />
        <ExperienceWrapper>
          {content.fr.experiences.map((experience, index) => {
            return (
              <RowExperience
                key={index}
                leftContent={experience.additionalInfos}
                rightContent={experience.mainInfos}
              />
            );
          })}
          <RowEducation {...content.fr.education} />
          <RowContact {...content.fr.contact} />
        </ExperienceWrapper>
      </MainWrapper>
    </>
  );
};

const Head = () => (
  <ContentWrapper>
    <div>
      <Title style={{ alignSelf: "flex-end" }} type="h4">
        Résumé
      </Title>
      <Title type="h1" style={{ display: "inline-block" }} bold>
        Gérome Lacaux
      </Title>
    </div>
  </ContentWrapper>
);

export default App;
