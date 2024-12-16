import { css } from "goober";
import { Palette } from "@/styles/constants";

export const container = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const loader = css`
  height: 400px;
`;

export const formItem = css`
  width: calc(50% - 12px);
  margin-bottom: 16px;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const toggle = css`
  margin-bottom: 16px;
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

export const info = css`
  margin-top: 25px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const safe = css`
  display: flex;
  align-items: center;
  span {
    color: ${Palette.text_second};
    margin-left: 5px;
  }

  @media (max-width: 960px) {
    width: 100%;
    margin-top: 25px;
  }
`;
