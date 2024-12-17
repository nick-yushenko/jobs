import React, { useEffect, useState } from "react";
import clx from "classnames";
import {
  container,
  CustomSelect,
  invalidText,
  noOptions,
  optionLabel,
  optionStyles,
} from "@/ui/Dropdown/style";
import Select from "react-select";
import { Icon } from "@/ui/Icon";

export interface DropdownOption {
  value: number;
  id: number;
  label: string;
}

type DropdownProps = {
  options: DropdownOption[];
  onChange?: (newValue: any, metaData: object) => void;
  isError?: boolean;
};

const CustomIndicator = () => {
  return <Icon name={"arrow-icon"} />;
};

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, isError }) => {
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    if (isError) setIsValid(false);
  }, [isError]);

  const formatOptionLabel = (opt: DropdownOption) => (
    <div key={opt.id} className={optionStyles}>
      <span className={clx(optionLabel)}>
        {opt?.label}
      </span>
    </div>
  );

  const customNoOptionsMessage = () => {
    return (
      <div className={noOptions}>
        К сожалению, список вакансий пуст, попробуйте позже
      </div>
    );
  };

  return (
    <div className={clx(container, !isValid && "invalid")}>
      <Select
        options={options}
        isSearchable
        formatOptionLabel={formatOptionLabel}
        className={clx(CustomSelect, !isValid && "invalid")}
        classNamePrefix="custom-select"
        noOptionsMessage={customNoOptionsMessage}
        components={{
          IndicatorSeparator: null,
          DropdownIndicator: CustomIndicator,
        }}
        // onChange={onChange}
        onChange={(newValue: any, actionMeta: any) => {
          setIsValid(true);

          onChange && onChange(newValue, actionMeta);
        }}
      />

      {!isValid && <span className={invalidText}>Поле обязательно</span>}
    </div>
  );
};
export default Dropdown;
