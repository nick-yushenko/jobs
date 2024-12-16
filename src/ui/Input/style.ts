import { css } from "goober";
import { Palette } from "@/styles/constants";

export const container = css`
  position: relative;
  display: inline-block;
  background-color: ${Palette.white};
  border-radius: 4px;
  min-height: 56px;
  width: 100%;
`;

export const invalidContainer = css`
  margin-bottom: 24px;

  input {
    color: ${Palette.red};
    border: 1px solid ${Palette.red} !important;
  }
`;

export const inputStyles = css`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
  border-radius: 4px;
  padding: 20px 24px 0;
  color: #10002b;
  font-size: 18px;
  line-height: 24px;
  background-color: #ffffff00;
  border: 1px solid #d5d9de;
  transition: 0.2s;

  &:hover {
    border-color: #a4aeb8;
    transition: 0.2s;
  }

  &:focus {
    border-color: ${Palette.primary_green};
    transition: 0.2s;

    & + span {
      color: ${Palette.primary_green};
      transition: 0.2s;
    }
  }
`;

export const invalidText = css`
  position: absolute;
  top: calc(56px + 5px);
  left: 24px;

  color: ${Palette.red};
  font-size: 13px;
  line-height: 16px;
`;

export const placeholderStyles = css`
  z-index: 1;
  position: absolute;
  top: calc(56px / 2);
  transform: translateY(-50%);
  left: 0;
  display: block;
  padding: 0 24px;
  color: #747e89;
  line-height: 24px;
  font-size: 16px;

  user-select: none;
  transition: 0.2s;
  width: calc(100% - 24px * 2);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const invalidPlaceholder = css`
  color: ${Palette.red} !important;
`;

export const hiddenHint = css`
  font-size: 14px;
  line-height: 20px;
  top: 5px;
  transform: none;
  transition: 0.2s;
  color: #747e89;
`;
