import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import { rem } from "polished";

import { SupportedLanguage } from "cv/content";
import { space, fontFamilyName, font, color } from "styles/const";
import { ifProp } from "styled-tools";

type LanguageChoiceProps = {
  chosenLanguage: SupportedLanguage;
  setChosenLanguage: React.Dispatch<React.SetStateAction<SupportedLanguage>>;
};

const LanguageChoiceWrapper = styled.div`
  display: flex;
  margin-bottom: ${space.xxl};
`;
const isActiveSLC = css`
  font-weight: ${font.weight.bolder};
  &::before {
    content: "";
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background-color: ${color.secondary.base};
    border-radius: 100%;
  }
`;
const isNotLastItemSLC = css`
  margin-right: ${space.xs};
`;
const SupportedLanguageContent = styled.span<{
  isActive: boolean;
  isNotLastItem: boolean;
}>`
  font-family: ${fontFamilyName.montserrat};
  font-weight: ${font.weight.semiBold};
  font-size: ${rem(14)};
  padding: ${rem(3)};
  cursor: pointer;
  position: relative;
  ${ifProp("isActive", isActiveSLC)}
  ${ifProp("isNotLastItem", isNotLastItemSLC)}
`;

export const LanguageChoice = ({
  chosenLanguage,
  setChosenLanguage,
}: LanguageChoiceProps) => {
  const supportedLanguages: { value: SupportedLanguage; label: string }[] = [
    {
      value: "fr",
      label: "français",
    },
    { value: "en", label: "english" },
  ];

  const onClickSetChosenLanguage = useCallback(
    (s: SupportedLanguage) => () => {
      setChosenLanguage(s);
    },
    [setChosenLanguage]
  );
  return (
    <LanguageChoiceWrapper>
      {supportedLanguages.map((supportedLanguage, index) => (
        <SupportedLanguageContent
          key={index}
          isNotLastItem={!(index === supportedLanguages.length - 1)}
          isActive={chosenLanguage === supportedLanguage.value}
          onClick={onClickSetChosenLanguage(supportedLanguage.value)}
        >
          {supportedLanguage.label}
        </SupportedLanguageContent>
      ))}
    </LanguageChoiceWrapper>
  );
};
