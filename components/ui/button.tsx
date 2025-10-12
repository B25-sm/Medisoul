import * as React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
};

export function Button({ className, variant = "default", size = "md", asChild, ...props }: ButtonProps) {
  const sizeClasses =
    size === "lg"
      ? "h-11 px-5 text-base"
      : size === "sm"
      ? "h-8 px-3 text-sm"
      : "h-10 px-4 text-sm";
  const variantClasses =
    variant === "outline"
      ? "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
      : "bg-blue-600 text-white hover:bg-blue-700";
  const classes = clsx(
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:opacity-50 disabled:pointer-events-none",
    sizeClasses,
    variantClasses,
    className
  );
  if (asChild) {
    // Consumers can pass an anchor element via props.children
    const child = React.Children.only(props.children) as React.ReactElement<any>;
    return React.cloneElement(child, {
      className: clsx(child.props.className, classes),
    });
  }
  return <button className={classes} {...props} />;
}


