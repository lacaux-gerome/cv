import { space, color } from "@styles/const";
import styled from "styled-components";

import { ContentWrapper } from "@/components/layout/content";
import {
  ExperienceAdditionalInfosProps,
  ExperienceAdditionalInfos,
} from "@/components/molecules/experience-additional-infos";
import {
  ExperienceMainInfosProps,
  ExperienceMainInfos,
} from "@/components/molecules/experience-main-infos";

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
