import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const ListStyle = styled.ul`
  list-style: inherit;
`;

export const List = ({ children }: PropsWithChildren<{}>) => (
  <ListStyle>{children}</ListStyle>
);
