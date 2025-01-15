// src/components/ui/Button.js
import Link from "next/link";

const variants = {
  primary: "bg-primary hover:bg-primary-dark text-white",
  secondary: "bg-secondary hover:bg-secondary-dark text-neutral-darkest",
  accent: "bg-accent hover:bg-accent-dark text-white",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
  const variantClasses = variants[variant];
  const sizeClasses = sizes[size];
  const classes = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
