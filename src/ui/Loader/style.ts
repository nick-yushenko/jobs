import { css } from "goober";
import { Palette } from "@/styles/constants";

export const container = css`
  width: 100%;
  height: 100%;
  padding: 16px;

  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const pump = css`
  width: 50px;
  height: 50px;
  border-radius: 500px;
  border-top: 2px solid ${Palette.primary_green};
  border-left: 2px solid ${Palette.primary_green};
  border-right: 2px solid ${Palette.primary_green_light};
  border-bottom: 2px solid ${Palette.primary_green};

  animation: rotate 1.5s linear infinite;
`;
export const text = css`
  font-size: 14px;
  line-height: 16px;
  color: ${Palette.text};
  margin-top: 24px;
  text-align: center;
  display: block;
`;
