import { css } from "goober";
import { Palette } from "@/styles/constants";

export const mainLayoutStyles = css`
  position: relative;

  width: 100%;
`;

export const containerStyles = css`
  position: relative;

  max-width: 1076px;
  width: 90%;

  padding: 32px;

  margin: 0 auto;

  border-radius: 16px;
  border: 1px solid ${Palette.border};
  background: ${Palette.white};

  box-shadow: ${Palette.boxShadow_block};

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  @media (max-width: 450px) {
    width: 100%;

    padding: 16px;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const wrapperStyles = css`
  position: relative;

  max-width: 1076px;
  width: 90%;

  margin: 0 auto;
`;
