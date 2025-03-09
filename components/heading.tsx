import React from "react";

export enum HeadingTag {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

type HeadingProps = {
  children: React.ReactNode;
  tag?: HeadingTag;
  underline?: boolean;
  underlineColor?: string;
};

export const Heading = ({
  children,
  tag = HeadingTag.H1,
  underline = true,
  underlineColor = "bg-blue-200",
}: HeadingProps) => {
  const baseStyles = "font-bold text-gray-800";

  const getSizeClass = () => {
    switch (tag) {
      case HeadingTag.H1:
        return "text-4xl";
      case HeadingTag.H2:
        return "text-3xl";
      case HeadingTag.H3:
        return "text-2xl";
      case HeadingTag.H4:
        return "text-xl";
      case HeadingTag.H5:
        return "text-lg";
      case HeadingTag.H6:
        return "text-base";
      default:
        return "text-base";
    }
  };

  const getMarginClass = () => {
    switch (tag) {
      case HeadingTag.H1:
        return "mb-12";
      case HeadingTag.H2:
        return "mb-8";
      case HeadingTag.H3:
        return "mb-6";
      case HeadingTag.H4:
        return "mb-4";
      case HeadingTag.H5:
        return "mb-3";
      case HeadingTag.H6:
        return "mb-3";
      default:
        return "mb-3";
    }
  };

  const headingClass = `${baseStyles} ${getSizeClass()}`;
  const wrapperClass = getMarginClass();

  const headingElement = React.createElement(
    tag.toLowerCase(),
    {
      className: headingClass,
      style: underline
        ? {
            display: "inline",
            backgroundImage: `linear-gradient(to right, ${
              underlineColor.includes("bg-")
                ? getColorFromClass(underlineColor)
                : underlineColor
            } 100%, transparent 0%)`,
            backgroundPosition: "0 95%",
            backgroundSize: "100% 0.4em",
            backgroundRepeat: "no-repeat",
            boxShadow: "none",
            paddingBottom: "0.15em",
            lineHeight: "1.5",
          }
        : {},
    },
    children
  );

  return <div className={wrapperClass}>{headingElement}</div>;
};

function getColorFromClass(colorClass: string): string {
  const colorMap: Record<string, string> = {
    "bg-blue-200": "rgba(191, 219, 254, 0.7)",
    "bg-blue-300": "rgba(147, 197, 253, 0.7)",
    "bg-blue-400": "rgba(96, 165, 250, 0.7)",
    "bg-green-200": "rgba(187, 247, 208, 0.7)",
    "bg-red-200": "rgba(254, 202, 202, 0.7)",
    "bg-yellow-200": "rgba(254, 240, 138, 0.7)",
    "bg-purple-200": "rgba(233, 213, 255, 0.7)",
    "bg-gray-200": "rgba(229, 231, 235, 0.7)",
  };

  return colorMap[colorClass] || "rgba(191, 219, 254, 0.7)";
}

export default Heading;
