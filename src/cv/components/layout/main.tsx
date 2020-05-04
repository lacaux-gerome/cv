import styled, { css } from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { rem } from "polished";

import { device, space } from "../../../styles/const";

const reponsive = css`
  width: 100%;
  max-width: ${rem(device.portraitTablet)};
  margin: 0 auto;
`;

export const MainWrapper = styled.div`
  ${breakpoint("tablet")`
   ${reponsive};
  `}
  padding: ${space.lg} ${space.base};
`;
