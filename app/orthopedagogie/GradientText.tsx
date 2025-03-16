type Props = {
  children: React.ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
  size?: string;
};

export const GradientText = ({
  children,
  gradientFrom = "from-blue-600",
  gradientTo = "to-indigo-600",
  className = "",
  size = "text-3xl",
}: Props) => {
  return (
    <span
      className={`block ${size} font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r ${gradientFrom} ${gradientTo} ${className}`}
    >
      {children}
    </span>
  );
};
