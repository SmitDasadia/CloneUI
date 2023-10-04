import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  linkTo?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  size = "medium",
  onClick,
  linkTo,
  className
}) => {
  const buttonStyles = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-300 hover:bg-gray-400 text-gray-800",
    tertiary: "bg-transparent hover:bg-gray-100 text-gray-600",
  };

  const sizeStyles = {
    small: "py-2 px-4 text-sm",
    medium: "py-3 px-6 text-base",
    large: "py-4 px-7  text-lg",
  };

  const buttonStyle = `transition duration-300 ease-in-out transform hover:scale-105 ${buttonStyles[variant]} ${sizeStyles[size]} ${className}`;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={linkTo || "#"}>
      <button
        className={buttonStyle}
        
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
