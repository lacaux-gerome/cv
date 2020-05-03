import React from "react";
import { rem } from "polished";
import styled from "styled-components";

import { Title } from "../atoms/title";
import { space, color } from "../../../styles/const";
import { ExperienceMainInfosType } from "../../content";

export type ExperienceMainInfosProps = ExperienceMainInfosType;

const ExperienceMainInfosTitle = styled(Title)`
  margin-bottom: ${space.sm};
`;
const ExperienceMainInfosContent = styled.p`
  font-size: ${rem(14)};
  line-height: 170%;
  color: ${color.primary.light};
`;

export const ExperienceMainInfos = ({
  title,
  explanation,
  status,
}: ExperienceMainInfosProps) => {
  return (
    <div>
      <Title type="h6">{status}</Title>
      <ExperienceMainInfosTitle type="h5" bold>
        {title}
      </ExperienceMainInfosTitle>
      <ExperienceMainInfosContent>{explanation}</ExperienceMainInfosContent>
    </div>
  );
};
