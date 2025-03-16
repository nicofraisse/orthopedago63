import React from "react";

const accentColorMap = {
  blue: "border-blue-400",
  red: "border-red-400",
  green: "border-green-400",
  yellow: "border-yellow-400",
  purple: "border-purple-400",
  pink: "border-pink-400",
  rose: "border-rose-400",
  "pink-light": "border-pink-300",
};

export enum TextPanelAccentColor {
  Blue = "blue",
  Red = "red",
  Green = "green",
  Rose = "rose",
  Yellow = "yellow",
  Purple = "purple",
  Pink = "pink",
  PinkLight = "pink-light",
}

type Props = {
  children: React.ReactNode;
  accentColor?: TextPanelAccentColor;
  backgroundColor?: string;
  isGradient?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
};

export const TextPanel = ({
  children,
  accentColor = TextPanelAccentColor.Blue,
  backgroundColor = "bg-white",
  isGradient = false,
  gradientFrom = "from-blue-50",
  gradientTo = "to-indigo-100",
  className = "",
}: Props) => {
  const borderClass = accentColor
    ? accentColorMap[accentColor]
    : accentColorMap.blue;

  const backgroundClass = isGradient
    ? `bg-gradient-to-r ${gradientFrom} ${gradientTo}`
    : backgroundColor;

  return (
    <div
      className={`group ${backgroundClass} p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 ${borderClass} ${className}`}
    >
      <div className="text-gray-800 font-sans text-lg">{children}</div>
    </div>
  );
};

export default TextPanel;
