import React from "react";

export enum HeadingTag {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

export enum UnderlineColor {
  Blue = "blue",
  BlueDark = "blueDark",
  Green = "green",
  GreenDark = "greenDark",
  Lime = "lime",
  LimeDark = "limeDark",
  Yellow = "yellow",
  YellowDark = "yellowDark",
  Amber = "amber",
  AmberDark = "amberDark",
  Pink = "pink",
  PinkDark = "pinkDark",
  Rose = "rose",
  RoseDark = "roseDark",
}

const underlineColorMap = {
  [UnderlineColor.Blue]: "rgba(191, 219, 254, 0.8)", // blue-200 equivalent
  // Validé pour titres: GreenDark, PinkDark
  [UnderlineColor.Green]: "rgba(187, 247, 208, 0.8)", // green-200 equivalent
  [UnderlineColor.Lime]: "rgba(217, 249, 157, 0.8)", // lime-200 equivalent
  [UnderlineColor.Yellow]: "rgba(254, 240, 138, 0.8)", // yellow-200 equivalent
  [UnderlineColor.Amber]: "rgba(253, 230, 138, 0.8)", // amber-200 equivalent
  [UnderlineColor.Pink]: "rgba(251, 207, 232, 0.8)", // pink-200 equivalent
  [UnderlineColor.Rose]: "rgba(254, 205, 211, 0.8)", // rose-200 equivalent

  [UnderlineColor.BlueDark]: "rgba(147, 197, 253, 0.8)", // blue-300 equivalent
  [UnderlineColor.GreenDark]: "rgba(134, 239, 172, 0.8)", // green-300 equivalent
  [UnderlineColor.LimeDark]: "rgba(190, 242, 100, 0.8)", // lime-300 equivalent
  [UnderlineColor.YellowDark]: "rgba(253, 224, 71, 0.8)", // yellow-300 equivalent
  [UnderlineColor.AmberDark]: "rgba(252, 211, 77, 0.8)", // amber-300 equivalent
  [UnderlineColor.PinkDark]: "rgba(249, 168, 212, 0.8)", // pink-300 equivalent
  [UnderlineColor.RoseDark]: "rgba(253, 164, 175, 0.8)", // rose-300 equivalent
};

type HeadingProps = {
  children: React.ReactNode;
  tag?: HeadingTag;
  underline?: boolean;
  underlineColor?: UnderlineColor;
};

export const Heading = ({
  children,
  tag = HeadingTag.H1,
  underline = true,
  underlineColor = UnderlineColor.GreenDark,
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

  const getUnderlineColor = () => {
    return underlineColorMap[underlineColor] || underlineColor;
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
            backgroundImage: `linear-gradient(to right, ${getUnderlineColor()} 100%, transparent 0%)`,
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
