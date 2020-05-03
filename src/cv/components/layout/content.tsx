import styled from "styled-components";
import { space } from "../../../styles/const";
import { rem } from "polished";

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: ${rem(300)} 1fr;
  grid-row-gap: ${space.lg};
`;
