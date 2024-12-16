import React, { AnchorHTMLAttributes, ReactNode } from "react";
import { linkStyles } from "@/ui/Link/style";

type LinkProps = {
  children?: ReactNode;
  text?: string;
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = ({ children, text, href, ...rest }) => {
  if (!children && !text) {
    throw new Error(
      "The Link component should contain either children or text.",
    );
  }
  return (
    <a className={linkStyles} href={href} {...rest}>
      {children ?? text}
    </a>
  );
};

export default Link;
