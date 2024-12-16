import React, { useEffect, useState } from "react";
import clx from "classnames";
import Select from "react-select";
import { Icon } from "@/ui/Icon";
import {
  container,
  CustomSelect,
  inputContainer,
  noOptions,
  optionClosed,
  optionLabel,
  optionStyles,
  optionTime,
} from "@/ui/CustomCurrencySelect/style";
import Input from "@/ui/Input";
import { combineEventHandlers } from "recharts/types/util/ChartUtils";
import { invalidText } from "@/ui/Dropdown/style";
import { Value } from "sass";
import { Currency } from "@/store/currencies/types";
import { logo } from "@/componets/Header/style";
import { makeLogger } from "ts-loader/dist/logger";

type DropdownProps = {
  options: Currency[];
  onChange?: (newValue: any, metaData: object) => void;
  onChangeAmount?: (value: string) => void;
  isError?: boolean;
};

const CustomIndicator = () => {
  return <Icon name={"arrow-icon"} />;
};
const CustomCurrencySelect: React.FC<DropdownProps> = ({
  options,
  onChange,
  onChangeAmount,
  isError,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(true);

  const [amount, setAmount] = useState<string>();
  const [val, setVal] = useState<Currency | undefined>(
    options.find(opt => opt.value === "USD"),
  );

  const formatOptionLabel = (opt: Currency) => (
    <div key={opt.value} className={optionStyles}>
      <span className={clx(optionLabel)}>{opt?.value}</span>
      <span className={clx(optionTime)}>({opt.name})</span>
    </div>
  );

  const onChangeHandler = (newValue: any, metaData: object) => {
    setVal(newValue);
    onChange && onChange(newValue, metaData);
  };

  const onChangeInputHandler = (value: string) => {
    let val = value.replaceAll(/\s/g, "");
    if (Number(val) > 0) {
      setIsValid(true);

      setAmount(val);

      onChangeAmount && onChangeAmount(val);
    } else {
      setIsValid(false);
    }
  };

  const customNoOptionsMessage = () => {
    return (
      <div className={noOptions}>
        К сожалению, по вашим параметрам ничего не найдено, попробуйте изменить
        их
      </div>
    );
  };

  useEffect(() => {
    if (isError) setIsValid(false);
  }, [isError]);

  useEffect(() => {
    setVal(options.find(opt => opt.value === "USD"));
  }, [options]);

  return (
    <div
      className={clx(container, isFocused && "focused", !isValid && "invalid")}
    >
      <Input
        placeholder={"Сумма*"}
        styles={clx(inputContainer, "input")}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        onChange={onChangeInputHandler}
        type={"amount"}
        postfix={val?.symbol}
        isError={isError}
      />
      <Select
        options={options}
        formatOptionLabel={formatOptionLabel}
        className={CustomSelect}
        classNamePrefix="custom-select"
        noOptionsMessage={customNoOptionsMessage}
        isSearchable={false}
        components={{
          IndicatorSeparator: null,
          DropdownIndicator: CustomIndicator,
        }}
        value={val}
        onChange={onChangeHandler}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />

      {!isValid && <span className={invalidText}>Поле обязательно</span>}
    </div>
  );
};
export default CustomCurrencySelect;
