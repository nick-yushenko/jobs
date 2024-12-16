import { css } from "goober";
import { Palette } from "@/styles/constants";

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const gos = css`
  width: 100%;
  background-color: rgba(238, 63, 88, 0.16);
  padding: 14px 18px;
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  text-decoration: none;
`;
export const textStyles = css`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.2px;
  text-align: center;
  margin-bottom: 16px;

`;
export const title = css`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 16px;
`;

export const info = css`
  display: block;
  font-size: 14px;
`;

export const arrow = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 20px;
  border: 1px solid #ee3f58;
  margin-left: auto;

`;
export const arrow_icon = css`
  transform: rotate(90deg);
`;
