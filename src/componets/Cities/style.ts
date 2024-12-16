import { css } from "goober";
import { Palette } from "@/styles/constants";

export const citiesWrapper = css``;

export const cityItem = css`
  margin-bottom: 8px;
  padding: 8px 16px 8px 0;
  color: ${Palette.text};
  cursor: pointer;
  transition: ${Palette.transition};

  &:hover {
    color: ${Palette.primary_green};
    transition: ${Palette.transition};
  }
`;

export const current = css`
  color: ${Palette.primary_green};
`;
