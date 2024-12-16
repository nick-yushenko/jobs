import React from "react";
import { container, pump, text } from "@/ui/Loader/style";

type TProps = {
  loadingText?: string;
};

const Loader: React.FC<TProps> = ({ loadingText }) => {
  return (
    <div className={container}>
      <div className={pump}></div>

      {loadingText && <span className={text}>{loadingText}</span>}
    </div>
  );
};

export default Loader;
