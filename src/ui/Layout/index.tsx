import React, { ReactNode } from "react";
import {
  containerStyles,
  mainLayoutStyles,
  wrapperStyles,
} from "@/ui/Layout/style";
import clx from "classnames";

type TProps = {
  children?: ReactNode;
  className?: string;
};

const Main: React.FC<TProps> = ({ children, className }) => {
  return <div className={clx(mainLayoutStyles, className)}>{children}</div>;
};
const Container: React.FC<TProps> = ({ children, className }) => {
  return <div className={clx(containerStyles, className)}>{children}</div>;
};

const Wrapper: React.FC<TProps> = ({ children, className }) => {
  return <div className={clx(wrapperStyles, className)}>{children}</div>;
};

const Layout = {
  Container: Container,
  Main: Main,
  Wrapper: Wrapper,
};
export default Layout;
