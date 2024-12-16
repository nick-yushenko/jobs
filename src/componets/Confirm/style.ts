import { css } from "goober";
import { Palette } from "@/styles/constants";

export const notion = css`
  border-radius: 8px;
  background: rgba(3, 155, 229, 0.24);

  padding: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.14px;

  margin-bottom: 12px;
`;

export const notionError = css`
  border-radius: 8px;
  background: rgb(229, 3, 3, 0.24);

  padding: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.14px;

  margin-bottom: 12px;
`;
export const text = css`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.14px;

  margin-top: 24px;
  margin-bottom: 12px;
`;
export const submitWrapper = css`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 16px;
  justify-content: space-between;
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

export const timer = css`
  display: flex;
  justify-content: center;
  width: calc(100% - 165px);
  span {
    color: ${Palette.primary_green};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: -0.16px;
    text-align: center;
  }
`;
