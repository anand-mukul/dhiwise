import React from "react";

const shapes = { round: "rounded-md" } as const;
const variants = {
  outline: {
    white_A700_33: "border-2 border-solid border-white-A700_33",
    gray_500_33: "border-2 border-gray-500_33 border-solid",
  },
  fill: {
    white_A700: "bg-white-A700",
    gray_500_33: "bg-gray-500_33 text-gray-500",
    red_A200: "bg-red-A200 text-white-A700",
    light_blue_200_33: "bg-light_blue-200_33",
    gray_900: "bg-gray-900 text-white-A700",
    white_A700_33: "bg-white-A700_33",
    light_blue_200: "bg-light_blue-200 text-white-A700",
    green_400: "bg-green-400 text-white-A700",
    indigo_A200: "bg-indigo-A200",
  },
} as const;
const sizes = {
  xs: "py-px",
  sm: "p-[3px]",
  md: "px-[7px] py-2",
  lg: "p-3",
  xl: "p-[15px]",
  "2xl": "px-3.5 py-[18px]",
  "3xl": "p-5",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
