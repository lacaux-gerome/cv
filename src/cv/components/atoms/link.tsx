import styled from "styled-components";
import { color } from "../../../styles/const";

export const Link = styled.a`
  text-decoration: none;
  position: relative;
  display: inline-block;
  color: ${color.secondary.base};
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${color.secondary.base};
    height: 1px;
  }
`;
