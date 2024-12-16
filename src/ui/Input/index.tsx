import React, { ChangeEvent, useEffect, useState } from "react";
import {
  container,
  hiddenHint,
  inputStyles,
  invalidContainer,
  invalidPlaceholder,
  invalidText,
  placeholderStyles,
} from "@/ui/Input/style";
import clx from "classnames";
import { createDefaultMaskGenerator, MaskedInput } from "react-hook-mask";
import NumberFormat, { NumericFormat } from "react-number-format";

type InputTypes = "phone" | "email" | "text" | "amount";

type InputProps = {
  type?: InputTypes;
  placeholder: string;
  initValue?: string;
  onChange?: (value: string) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  minLength?: number;
  maxLength?: number;
  required?: boolean;

  postfix?: string;
  styles?: string;

  newValue?: string;

  isError?: boolean;
};

const errors = {
  minLength: (length: number) => `Минимальная длина ${length} символов`,
  maxLength: (length: number) => `максимальная длина ${length} символов`,
  required: "Поле обязательно",
  invalidPhone: "Номер введен не полностью",
};

// const maskGenerator = createDefaultMaskGenerator("+7 (999) 999 99-99");
const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  initValue,
  onChange,
  onBlur,
  onFocus,
  minLength,
  maxLength,
  required,
  styles,
  postfix,
  newValue,
  isError,
}: InputProps) => {
  const [value, setValue] = useState<string>(initValue ?? "");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorText, setErrorText] = useState<string>("");
  const [valueVisibility, setValueVisibility] = useState<boolean>(false);

  const maskGenerator = createDefaultMaskGenerator("+7 (999) 999 99-99");

  const validate = (val: string) => {
    let isValid = false;
    let error = "";
    const localMinLength = type === "phone" ? 10 : minLength;
    if (!required && val.trim() === "") {
      isValid = true;
    } else if (required && val.trim() === "") {
      error = errors.required;
    } else if (localMinLength && val.length < localMinLength) {
      error =
        type !== "phone"
          ? errors.minLength(localMinLength)
          : errors.invalidPhone;
    } else if (maxLength && val.length > maxLength) {
      error = errors.maxLength(maxLength);
    } else {
      isValid = true;
    }

    return {
      isValid: isValid,
      error: error,
    };
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement> | string) => {
    let val = typeof e === "string" ? e : e.target.value;

    onChange && onChange(val);

    if (validate(val).isValid) {
      setIsValid(true);
      setErrorText("");
    }

    if (type === "amount") {
      const cleanedString = val.replace(/[^\d.,]/g, "");
      setValue(Number(cleanedString).toLocaleString("ru-RU"));
    } else setValue(val);
  };
  const onBlurHandler = (e: ChangeEvent<HTMLInputElement> | string) => {
    let val = typeof e === "string" ? e : e.target.value;

    setIsValid(validate(val).isValid);
    setErrorText(validate(val).error);

    onChange && onChange(val);

    setValue(val);
  };

  useEffect(() => {
    setValue(newValue ?? "");
  }, [newValue]);

  useEffect(() => {
    if (isError) {
      setIsValid(validate(value).isValid);
      setErrorText(validate(value).error);
    }
  }, [isError]);

  return (
    <div className={clx(container, !isValid && invalidContainer, styles)}>
      {type === "phone" ? (
        <MaskedInput
          maskGenerator={maskGenerator}
          className={inputStyles}
          type={"text"}
          value={value}
          onChange={onChangeHandler}
          onFocus={() => {
            setValueVisibility(true);
          }}
          minLength={minLength}
          onBlur={e => {
            onBlurHandler(e);
            setValueVisibility(e.target.value !== "");
          }}
          autoComplete={"off"}
        />
      ) : (
        <input
          className={inputStyles}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={e => {
            setValueVisibility(true);
            onFocus && onFocus(e);
          }}
          onBlur={e => {
            onBlurHandler(e);
            onBlur && onBlur(e);
            setValueVisibility(e.target.value !== "");
          }}
          autoComplete={"off"}
        />
      )}

      <span
        className={clx(
          placeholderStyles,
          !isValid && invalidPlaceholder,
          valueVisibility && hiddenHint,
        )}
      >
        {placeholder}
      </span>

      {!isValid && <span className={invalidText}>{errorText}</span>}
    </div>
  );
};

export default Input;
