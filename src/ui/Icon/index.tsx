import React, { SVGProps } from "react";
import Layout from "@/ui/Layout";
import { header } from "@/componets/Header/style";

enum IconSize {
  xs = 14,
  sm = 18,
  md = 24,
  lg = 30,
  xl = 36,
}

export type TIconSize = keyof typeof IconSize;

export type TIconProps = {
  width?: number;
  height?: number;
  name: string;
  size?: TIconSize;
  interactive?: boolean;
  className?: string;
} & SVGProps<SVGSVGElement>;

export const Icon = ({
  width = 18,
  height = 18,
  name,
  fill = "CurrentColor",
  size,
  interactive = false,
  className,
  ...svgProps
}: TIconProps) => {
  const iconWidth = size ? IconSize[size] : width;
  const iconHeight = size ? IconSize[size] : height;

  return (
    <svg
      {...svgProps}
      width={`${iconWidth}px`}
      height={`${iconHeight}px`}
      className={className}
    >
      <use href={`#${name}`} fill={fill} />
    </svg>
  );
};
