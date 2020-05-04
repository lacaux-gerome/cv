import React from "react";

import { ContentWrapper } from "../layout/content";
import { Title } from "../atoms/title";
import { Dot } from "../atoms/dot";

type HeadProps = {
  mainTitle: string;
};

export const Head = (props: HeadProps) => (
  <ContentWrapper>
    <div>
      <Title style={{ alignSelf: "flex-end" }} type="h4">
        {props.mainTitle}
      </Title>
      <Title
        type="h1"
        style={{ display: "inline-block", position: "relative" }}
        bold
      >
        Gérome Lacaux
        <Dot />
      </Title>
    </div>
  </ContentWrapper>
);
