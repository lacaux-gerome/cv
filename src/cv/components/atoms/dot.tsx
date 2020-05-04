import styled from "styled-components";
import { rem } from "polished";

import { color, font } from "styles/const";

export const Dot = styled.span`
  &::before {
    content: ".";
    color: ${color.secondary.base};
    font-size: ${rem(55)};
    position: absolute;
    left: calc(100% + 5px);
    bottom: -9px;
    font-weight: ${font.weight.black};
  }
`;
