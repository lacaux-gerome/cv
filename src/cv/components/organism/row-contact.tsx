import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { ContactType } from "../../content";
import { Title } from "../atoms/title";
import { space, color, font, fontFamilyName } from "../../../styles/const";
import { ContentWrapper } from "../layout/content";
import { LinkToEmail, Link } from "../atoms/link";

type RowContactProps = ContactType;

const RowContactInner = styled.div`
  padding: ${space.lg} 0;
`;
const RowContactContent = styled.p`
  font-size: ${rem(14)};
  line-height: 170%;
  color: ${color.primary.light};
`;
const RowContactLabel = styled.span`
  font-weight: ${font.weight.bold};
`;
const RowContactContentWrapper = styled(ContentWrapper)`
  grid-row-gap: ${rem(2)};
`;
const ContactAdditionnalContent = styled.p`
  font-family: ${fontFamilyName.robotoCondensed};
  color: ${color.primary.light};
  margin-top: ${rem(5)};
`;
const WrapperTitleContact = styled.div`
  margin-bottom: ${space.sm};
`;

export const RowContact = (props: RowContactProps) => {
  return (
    <RowContactInner>
      <WrapperTitleContact>
        <Title type="h4" bold>
          {props.title}
        </Title>
      </WrapperTitleContact>
      <RowContactContentWrapper>
        <ContactAdditionnalContent>
          {props.contacts["mail"].explanation}
        </ContactAdditionnalContent>
        <RowContactContent>
          <RowContactLabel>{props.contacts["mail"].label} :</RowContactLabel>{" "}
          <LinkToEmail url={props.contacts["mail"].url}>
            {props.contacts["mail"].content}
          </LinkToEmail>
        </RowContactContent>
        <ContactAdditionnalContent>
          {props.contacts["github"].explanation}
        </ContactAdditionnalContent>
        <RowContactContent>
          <RowContactLabel>{props.contacts["github"].label} :</RowContactLabel>{" "}
          <Link href={props.contacts["github"].url} target="#blank">
            {props.contacts["github"].content}
          </Link>
        </RowContactContent>
        <ContactAdditionnalContent>
          {props.contacts["linkedin"].explanation}
        </ContactAdditionnalContent>
        <RowContactContent>
          <RowContactLabel>
            {props.contacts["linkedin"].label} :
          </RowContactLabel>{" "}
          <Link href={props.contacts["linkedin"].url} target="#blank">
            {props.contacts["linkedin"].content}
          </Link>
        </RowContactContent>
      </RowContactContentWrapper>
    </RowContactInner>
  );
};
