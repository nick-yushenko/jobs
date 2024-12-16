import { css, styled } from "goober";
import { Palette } from "@/styles/constants";

export const invalidText = css`
  position: absolute;
  top: calc(56px + 5px);
  left: 24px;

  color: ${Palette.red};
  font-size: 13px;
  line-height: 16px;
`;
export const container = css`
  position: relative;
  display: flex;
  border: 1px solid #d5d9de;
  transition: 0.2s;
  border-radius: 4px;

  &:hover {
    border-color: #a4aeb8;
    transition: ${Palette.transition};

    .input {
      border-color: #a4aeb8;
      transition: ${Palette.transition};
    }
  }

  .input {
    border-right: 1px solid #d5d9de;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    transition: ${Palette.transition};
  }

  &.focused {
    border-color: ${Palette.primary_green};
    transition: ${Palette.transition};

    .input {
      border-color: ${Palette.primary_green};
      transition: ${Palette.transition};
    }
  }

  &.invalid {
    border-color: ${Palette.red};
    transition: 0.2s;
    margin-bottom: 24px;

    .input {
      border-color: ${Palette.red};
      transition: 0.2s;
    }
    .input span,
    input {
      color: ${Palette.red};
      transition: 0.2s;
    }
  }
`;

export const inputContainer = css`
  display: flex;

  input {
    border: none;
  }
`;
export const CustomSelect = css`
  height: 56px;
  width: 110px;
  position: static !important;

  .custom-select__control {
    height: 100%;

    border: none !important;
    box-shadow: none;
  }

  .custom-select__input-container {
    margin: 0;
    padding: 0;
    height: 100%;
    position: relative;
  }

  .custom-select__value-container {
    height: 100%;
    padding: 0 4px 0 4px;

    span:last-child {
      display: none;
    }
  }

  .custom-select__placeholder {
    display: none;
  }

  .custom-select__control--menu-is-open {
    border-color: ${Palette.primary_green} !important;

    &:hover {
      border-color: ${Palette.primary_green} !important;
    }

    .custom-select__input-container {
      padding: 20px 24px 0 0;
    }

    .custom-select__indicators {
      transform: rotate(0deg);
    }
  }

  .custom-select__value-container--has-value {
    .custom-select__input-container {
      &::before {
        opacity: 0;
        transition: opacity 0s;
      }
    }
  }

  .custom-select__single-value {
    margin: 0;

    display: flex;
    justify-content: flex-end;
  }

  .custom-select__option--is-focused {
    background-color: ${Palette.toggle_gray};
  }

  .custom-select__option--is-selected {
    background-color: ${Palette.primary_green_light};
  }

  .custom-select__indicator-separator {
    display: none;
  }

  .custom-select__indicators {
    margin-right: 15px;
    width: 18px;

    transform: rotate(180deg);
  }

  .custom-select__menu {
    width: 100%;
    position: absolute;
    right: 0;
  }
`;

export const noOptions = css`
  width: 100%;
  max-width: 360px;
  margin: 10px auto;
  color: ${Palette.text_second};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.16px;
  z-index: 10000;
  position: relative;
`;

export const optionStyles = css`
  display: flex !important;
  align-items: flex-start !important;
`;

export const optionLabel = css`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.16px;

  color: ${Palette.text};

  &.closed {
    color: ${Palette.text_second};
  }
`;

export const optionTime = css`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.16px;

  color: ${Palette.text_second};
  margin-left: 5px;
`;

export const optionClosed = css`
  color: ${Palette.red};
`;
