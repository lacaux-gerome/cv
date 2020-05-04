import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "../layout/content";
import { space, color } from "../../../styles/const";

import {
  ExperienceAdditionalInfosProps,
  ExperienceAdditionalInfos,
} from "../molecules/experience-additional-infos";

import {
  ExperienceMainInfos,
  ExperienceMainInfosProps,
} from "../molecules/experience-main-infos";

type RowExperienceProps = {
  leftContent: ExperienceAdditionalInfosProps;
  rightContent: ExperienceMainInfosProps;
};
const RowExperienceInner = styled.div`
  padding: ${space.lg} 0;
  border-bottom: 1px dotted ${color.primary.light};
`;

export const RowExperience = (props: RowExperienceProps) => {
  return (
    <RowExperienceInner>
      <ContentWrapper>
        <ExperienceAdditionalInfos {...props.leftContent} />
        <ExperienceMainInfos {...props.rightContent} />
      </ContentWrapper>
    </RowExperienceInner>
  );
};
