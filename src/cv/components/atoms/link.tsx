import { PropsWithChildren } from "react";
import styled from "styled-components";
import { color } from "@styles/const";

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

const LinkToEmailButton = styled.button`
  background-color: transparent;
  border: none;
  position: relative;
  color: ${color.secondary.base};
  cursor: pointer;
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
export const LinkToEmail = (props: PropsWithChildren<{ url: string }>) => {
  const gmailNewEmailUrl: string = "https://mail.google.com/mail?view=cm&tf=0";
  return (
    <LinkToEmailButton
      onClick={() => window.open(`${gmailNewEmailUrl}${props.url}`)}
    >
      {props.children}
    </LinkToEmailButton>
  );
};
