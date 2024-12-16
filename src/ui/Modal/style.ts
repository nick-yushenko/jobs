import { css } from "goober";
import { Palette } from "@/styles/constants";

export const container = css`
  display: inline-flex;
  align-items: flex-start;
  cursor: pointer;
  user-select: none;
`;
export const checkbox = css`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #d6d9e0;
  transition: ${Palette.transition};

  margin-right: 10px;
  &.checked {
    transition: ${Palette.transition};
    background-color: ${Palette.primary_green};
    border-color: ${Palette.primary_green};
  }
`;
