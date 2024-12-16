import { css } from "goober";
import { Palette } from "@/styles/constants";

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const textStyles = css`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.2px;
  text-align: center;
  margin-bottom: 16px;

  width: 400px;
  max-width: 100%;
`;

export const submit = css`
  height: 56px;
  border-radius: 8px;
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${Palette.primary_green};
  transition: ${Palette.transition};

  cursor: pointer;

  color: ${Palette.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.16px;

  &:hover {
    background-color: ${Palette.primary_green_hover};
  }

  &.disabled {
    background-color: ${Palette.text_second};
  }
`;
