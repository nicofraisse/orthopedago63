import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  isGradient?: boolean;
  fromColor?: string;
  toColor?: string;
  hasShadow?: boolean;
  hasBorder?: boolean;
  borderColor?: string;
  padding?: string;
  rounded?: string;
};

export const Card = ({
  children,
  className = "",
  isGradient = false,
  fromColor = "from-blue-50",
  toColor = "to-indigo-100",
  hasShadow = true,
  hasBorder = true,
  borderColor,
  padding = "p-8",
  rounded = "rounded-lg",
}: Props) => {
  const backgroundClass = isGradient
    ? `bg-gradient-to-r ${fromColor} ${toColor}`
    : "bg-white";

  const defaultBorderClass = isGradient ? "border-blue-100" : "border-gray-100";
  const borderClass = hasBorder
    ? `border ${borderColor ? `border-${borderColor}` : defaultBorderClass}`
    : "";

  const shadowClass = hasShadow ? "shadow-sm" : "";

  return (
    <div
      className={`${backgroundClass} ${padding} ${rounded} ${borderClass} ${shadowClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
