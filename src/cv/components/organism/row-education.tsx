import React from "react";
import { rem } from "polished";
import styled from "styled-components";

import { EducationType } from "../../content";

import { ContentWrapper } from "../layout/content";
import { space, color, fontFamilyName } from "../../../styles/const";
import { Title } from "../atoms/title";

type RowEducationProps = EducationType;

const RowEducationInner = styled.div`
  padding: ${space.lg} 0;
  border-bottom: 1px dotted ${color.primary.light};
`;

const RowEducationContent = styled.p`
  font-family: ${fontFamilyName.robotoCondensed};
  color: ${color.primary.light};
  margin-top: ${rem(5)};
`;
const WrapperTitleEducation = styled.div`
  margin-bottom: ${space.sm};
`;

export const RowEducation = (props: RowEducationProps) => {
  return (
    <RowEducationInner>
      <WrapperTitleEducation>
        <Title type="h4" bold>
          {props.title}
        </Title>
      </WrapperTitleEducation>
      {props.content.map((c) => (
        <ContentWrapper>
          <RowEducationContent>{c.date}</RowEducationContent>
          <RowEducationContent>{c.name}</RowEducationContent>
        </ContentWrapper>
      ))}
    </RowEducationInner>
  );
};
