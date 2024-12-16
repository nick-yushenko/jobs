import { css } from "goober";
import { Palette } from "@/styles/constants";

export const switchContainerStyles = css`
  display: flex;
  align-items: center;
  cursor: pointer;

  width: 236px;
  height: 56px;
`;

export const switchSideStyles = css`
  width: calc(50% - 8px);

  text-align: center;

  user-select: none;
`;

export const switchTrackStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: #ddd;
  border-radius: 8px;
  padding: 8px;
`;

export const switchThumbStyles = css`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 50%;
  height: 40px;
  background-color: ${Palette.text};
  border-radius: 8px;
  transition: left 0.2s ease-in-out;
`;

export const checked = css`
  left: calc(50% - 8px);
`;

export const switchThumbText = css`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  color: ${Palette.white};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.16px;

  user-select: none;

  opacity: 0;
  transition: opacity ${Palette.transition};
`;

export const switchThumbTextActive = css`
  opacity: 1;
  transition: opacity ${Palette.transition};
`;
