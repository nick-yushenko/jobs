import React, { ReactNode, useState } from "react";
import { checkbox, container } from "@/ui/Checkbox/style";
import { Icon } from "@/ui/Icon";
import clx from "classnames";

type CheckboxProps = {
  label: ReactNode | string;
  checked?: boolean;
  onChange?: (val: any) => void;
  isError?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  onChange,
  checked,
  isError,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked ?? false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return (
    <label
      className={clx(container, isError && !checked && "invalid")}
      onClick={handleCheckboxChange}
    >
      <div className={clx(checkbox, isChecked && "checked")}>
        <Icon name={"checkbox-icon"} className={"icon"} />
      </div>

      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
