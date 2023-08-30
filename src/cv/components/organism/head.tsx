import { Dot } from "@/components/atoms/dot";
import { Title } from "@/components/atoms/title";
import { ContentWrapper } from "@/components/layout/content";

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
