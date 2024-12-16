import React, { useState } from "react";
import {
  checked,
  switchContainerStyles,
  switchSideStyles,
  switchThumbStyles,
  switchThumbText,
  switchThumbTextActive,
  switchTrackStyles,
} from "@/ui/Toggle/style";
import clx from "classnames";

type ToggleProps = {
  onChange?: (isChecked: boolean) => void;
  styles?: string;
};

const Toggle: React.FC<ToggleProps> = ({ onChange, styles }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div className={clx(switchContainerStyles, styles)} onClick={handleClick}>
      <div className={switchTrackStyles}>
        <span className={switchSideStyles}>Я покупаю</span>
        <span className={switchSideStyles}>Я продаю</span>
        <div className={clx(switchThumbStyles, isChecked && checked)}>
          <span
            className={clx(
              switchThumbText,
              !isChecked && switchThumbTextActive,
            )}
          >
            Я покупаю
          </span>
          <span
            className={clx(switchThumbText, isChecked && switchThumbTextActive)}
          >
            Я продаю
          </span>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
