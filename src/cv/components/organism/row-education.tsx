import styled, { css } from "styled-components";
import { rem } from "polished";

import { Title } from "@/components/atoms/title";
import { ContentWrapper } from "@/components/layout/content";
import { EducationType } from "@/content";
import { space, color, font, device } from "@styles/const";

import { ifProp } from "styled-tools";

type RowEducationProps = EducationType;

const RowEducationInner = styled.div`
  padding: ${space.lg} 0;
  border-bottom: 1px dotted ${color.primary.light};
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: ${rem(10)};
`;

const RowEducationContent = styled.p<{ bold?: boolean }>`
  font-size: ${rem(14)};
  color: ${color.primary.light};
  ${ifProp(
    "bold",
    css`
      font-weight: ${font.weight.bold};
    `
  )}
  @media (min-width: ${rem(device.portraitTablet)}) {
    margin-top: ${rem(5)};
    font-weight: ${font.weight.normal};
  }
`;
const WrapperTitleEducation = styled.div`
  margin-bottom: ${space.sm};
`;
const RowEducationContentWrapper = styled(ContentWrapper)`
  grid-row-gap: 0;
`;

export const RowEducation = (props: RowEducationProps) => (
  <RowEducationInner>
    <WrapperTitleEducation>
      <Title type="h4" bold>
        {props.title}
      </Title>
    </WrapperTitleEducation>
    {props.content.map((c, i) => (
      <RowEducationContentWrapper key={i}>
        <RowEducationContent bold={true}>{c.date}</RowEducationContent>
        <RowEducationContent>{c.name}</RowEducationContent>
      </RowEducationContentWrapper>
    ))}
  </RowEducationInner>
);
