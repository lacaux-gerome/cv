import styled, { css } from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { rem } from "polished";

import { space } from "../../../styles/const";

const responsive = css`
  grid-template-columns: ${rem(300)} 1fr;
  grid-row-gap: ${space.lg};
`;

export const ContentWrapper = styled.div`
  ${breakpoint("tablet")`
   ${responsive}
  `}
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${space.md};
`;
