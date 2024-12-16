import { css } from "goober";

export const h1Styles = css`
  font-size: 40px;
  line-height: 56px;
  font-weight: 700;
  font-style: normal;

  margin: 0 0 16px 0;

  @media (max-width: 960px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const h2Styles = css`
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  font-style: normal;

  letter-spacing: -0.32px;

  margin: 0 0 24px 0;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 34px;
  }
`;

export const h3Styles = css`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;

  letter-spacing: -0.32px;
  margin: 0 0 16px 0;
`;
