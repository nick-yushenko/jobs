import { css } from "goober";
import { Palette } from "@/styles/constants";

export const linkStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  letter-spacing: -0.14px;

  text-decoration: none;
  color: ${Palette.primary_green};
  transition: color ${Palette.transition};

  &:hover,
  &:active {
    color: ${Palette.primary_green_hover};
    transition: color ${Palette.transition};
  }
`;
