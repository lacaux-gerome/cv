import styled from "styled-components";
import { rem } from "polished";

import { device, space } from "../../../styles/const";

export const MainWrapper = styled.div`
  width: 100%;
  max-width: ${rem(device.portraitTablet)};
  margin: 0 auto;
  padding: ${space.xxl} 0;
`;
