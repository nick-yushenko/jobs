import { css } from "goober";
import { Palette } from "@/styles/constants";
import { padStart } from "lodash-es";

export const subheader = css`
  padding: 20px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const city = css`
  font-size: 16px;
  line-height: 20px;
  height: 100%;
  color: ${Palette.primary_green};
  cursor: pointer;
  margin-left: auto;
  margin-right: 30px;
  transition: color ${Palette.transition};

  &:hover {
    color: ${Palette.primary_green_hover};
    transition: color ${Palette.transition};
  }
`;
export const header = css`
  padding-top: 32px;
  position: relative;
  background-color: ${Palette.background};
  @media (max-width: 740px) {
    padding-top: 0;
    padding-bottom: 340px;
    z-index: 5;
  }

  @media (max-width: 450px) {
    padding-top: 0;
    padding-bottom: 280px;
    z-index: 5;
  }
  @media (max-width: 400px) {
    padding-top: 0;
    padding-bottom: 230px;
    z-index: 5;
  }
`;

export const headerWrapper = css`
  padding-bottom: 120px;

  @media (max-width: 740px) {
    padding: 0;
    position: static;

  }

  @media (max-width: 450px) {
    width: 100%;
    margin: 0;
  }
`;

export const wallet = css`
  position: absolute;
  bottom: 0;
  right: 9px;
  width: 516px;
  height: 374px;

  @media (max-width: 1100px) {
    width: 420px;
    height: 374px;
  }
  @media (max-width: 960px) {
    width: 370px;
    height: 320px;
    right: -40px;
  }

  @media (max-width: 740px) {
    bottom: 0;
    top: auto;
    left: 50%;
    transform: translate(-50%);
    right: auto;
    width: 500px;
    height: 380px;
  }
  @media (max-width: 450px) {
    bottom: -30px;
    top: auto;
    left: 2%;
    right: auto;
    width: 96%;
    height: auto;
    transform: none;
  }

  @media (max-width: 400px) {
    bottom: -20px;
  }
`;
export const headerWrapperMb = css`

  @media (max-width: 450px) {
    padding: 32px 16px;

    width: 100%;
    margin: 0;
  }
`;

export const logo = css`
  display: flex;
  align-items: center;

  svg {
    width: 128px;
    height: 19px;
  }

  @media (max-width: 425px) {
    svg {
      width: 108px;
    }
  }
`;

export const phone = css`
  display: inline-flex;
  text-decoration: none;
  span {
    color: ${Palette.text}
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: -0.16px;
    margin-left: 8px;
  }

  @media (max-width: 500px) {
    span {
      display: none;
    }
  }
`;



export const list = css`
  margin-bottom: 12px;
`;

export const listItem = css`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;

  span {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const styledIcon = css`
  width: 16px;
  height: 12px;
`;

export const text = css`
  font-size: 16px;
  line-height: 24px;
`;
