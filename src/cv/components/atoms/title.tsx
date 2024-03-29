import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { rem } from "polished";
import { switchProp } from "styled-tools";
import { color, fontFamilyName, font } from "@styles/const";

type TitleProps = {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  addtionalStyle?: "outlined";
  className?: string;
  style?: React.CSSProperties;
  bold?: boolean;
  italic?: boolean;
};

const oulinedTitle = css`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    left: -5px;
    right: -5px;
    height: ${rem(18)};
    background-color: ${color.secondary.base};
    opacity: 1;
    top: 8px;
  }
`;

export const Title = styled(
  ({ type, ...props }: PropsWithChildren<TitleProps>) => {
    return React.createElement(type, props);
  }
)`
  color: ${color.primary.base};
  font-family: ${fontFamilyName.montserrat};
  ${switchProp("type", {
    h1: css`
      font-size: ${rem(32)};
    `,
    h2: css`
      font-size: ${rem(24)};
    `,
    h3: css`
      font-size: ${rem(20)};
    `,
    h4: css`
      font-size: ${rem(18)};
    `,
    h5: css`
      font-size: ${rem(16)};
    `,
  })};

  ${switchProp("addtionalStyle", {
    outlined: oulinedTitle,
  })};
  ${(props) => (props.bold ? `font-weight: ${font.weight.bold};` : "")};
  ${(props) => (props.italic ? `font-style: italic;` : "")};
`;
