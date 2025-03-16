import React from "react";
import Link from "next/link";

type Props = {
  gradientFrom?: string;
  gradientTo?: string;
  showArrow?: boolean;
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export const Button = ({
  gradientFrom = "from-blue-500",
  gradientTo = "to-indigo-600",
  showArrow = true,
  href,
  children,
  className = "",
  ...props
}: Props) => {
  const buttonClasses = `inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ${className}`;

  const ArrowIcon = () =>
    showArrow && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 ml-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    );

  const ButtonContent = () => (
    <>
      <span>{children}</span>
      <ArrowIcon />
    </>
  );

  if (href) {
    return (
      <Link href={href}>
        <button className={buttonClasses} {...props}>
          <ButtonContent />
        </button>
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      <ButtonContent />
    </button>
  );
};
