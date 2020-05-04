import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { Title } from "../atoms/title";
import { fontFamilyName, color } from "../../../styles/const";
import { ExperienceAdditionalInfosType } from "../../content";

export type ExperienceAdditionalInfosProps = ExperienceAdditionalInfosType;

const ExperienceAdditionalContent = styled.p`
  font-family: ${fontFamilyName.robotoCondensed};
  color: ${color.primary.light};
  margin-top: ${rem(5)};
`;
const ExperienceAdditionalInfosInner = styled.div`
  margin-top: ${rem(5)};
  font-size: ${rem(14)};
`;

export const ExperienceAdditionalInfos = ({
  title,
  date,
  technos,
}: ExperienceAdditionalInfosProps) => {
  return (
    <ExperienceAdditionalInfosInner>
      {title && <Title type="h3">{title}</Title>}
      <ExperienceAdditionalContent>{date}</ExperienceAdditionalContent>
      <ExperienceAdditionalContent>
        {technos.join(", ")}
      </ExperienceAdditionalContent>
    </ExperienceAdditionalInfosInner>
  );
};
