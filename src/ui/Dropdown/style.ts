import { css, styled } from "goober";
import { Palette } from "@/styles/constants";
import Select from "react-select";

export const container = css`
  position: relative;
  display: inline-block;
  background-color: ${Palette.white};
  border-radius: 4px;
  min-height: 56px;
  width: 100%;

  &.invalid {
    margin-bottom: 24px;
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

export const CustomSelect = css`
  height: 56px;

  .custom-select__menu {
    z-index: 3;
  }
  .custom-select__control {
    height: 100%;
    border-radius: 4px;
    border: 1px solid #d5d9de !important;
    box-shadow: none;

    &:hover {
      border: 1px solid #a4aeb8 !important;
    }
  }

  .custom-select__input-container {
    margin: 0;
    padding: 0;
    height: 100%;
    position: relative;

    &::before {
      content: "Вакансия";
      position: absolute;
      top: calc(56px / 2);
      transform: translateY(-50%);
      left: 0;
      display: block;
      color: #747e89;
      line-height: 24px;
      font-size: 16px;
      user-select: none;
      transition: ${Palette.transition};
      width: calc(100% - 24px * 2);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .custom-select__value-container {
    height: 100%;
    padding: 0 4px 0 24px;
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

      &::before {
        color: ${Palette.primary_green} !important;
        font-size: 14px;
        line-height: 20px;
        opacity: 1 !important;

        top: 5px;
        transform: none;
        transition: ${Palette.transition};
      }
    }
    .custom-select__value-container--has-value .custom-select__single-value {
      opacity: 1;
      transition: opacity 0s;
    }

    .custom-select__indicators {
      transform: rotate(0deg);
    }
  }

  .custom-select__value-container--has-value {
    .custom-select__input-container {
      &::before {
        font-size: 14px;
        line-height: 20px;
        opacity: 1 !important;

        top: 5px;
        transform: none;
        transition: ${Palette.transition};
      }
    }
  }

  .custom-select__single-value {
    div {
      position: absolute;
    }
    span:last-child {
      display: none;
    }
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

  &.invalid {
    .custom-select__control {
      border-color: ${Palette.red} !important;
    }

    .custom-select__input-container {
      &::before {
        color: ${Palette.red} !important;
      }
    }
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
`;

export const optionStyles = css`
  display: flex !important;
  flex-direction: column;
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

  color: ${Palette.primary_green};
`;

export const optionClosed = css`
  color: ${Palette.red};
`;
