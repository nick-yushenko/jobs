import React, { ReactNode } from "react";
import { h1Styles, h2Styles, h3Styles } from "@/ui/Title/style";

type TProps = {
  children?: ReactNode;
  text?: string;
};

const H1: React.FC<TProps> = ({ children, text }) => {
  if (!children && !text) {
    throw new Error(
      "The Title.H1 component should contain either children or text.",
    );
  }
  return <h1 className={h1Styles}>{children ?? text}</h1>;
};

const H2: React.FC<TProps> = ({ children, text }) => {
  if (!children && !text) {
    throw new Error(
      "The Title.H2 component should contain either children or text.",
    );
  }
  return <h2 className={h2Styles}>{children}</h2>;
};

const H3: React.FC<TProps> = ({ children, text }) => {
  if (!children && !text) {
    throw new Error(
      "The Title.H3 component should contain either children or text.",
    );
  }
  return <h3 className={h3Styles}>{children}</h3>;
};
const Title = {
  H1,
  H2,
  H3,
};
export default Title;
