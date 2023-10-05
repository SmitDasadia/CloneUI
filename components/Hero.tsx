import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

interface HeroProps {
  title: string;
  subTitle?: string;
  backgroundColor: string;
  buttonText: string;
  isButton?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  backgroundColor,
  buttonText,
  subTitle,
  isButton,
}) => {
  const containerStyle = {
    background: backgroundColor,
  };

  const handleButtonClick = () => {
    // Handle button click logic here
  };

  return (
    <div className="relative">
      <div className="h-screen bg-cover bg-center" style={containerStyle}>
        <div className="absolute inset-0 opacity-50"></div>
        <div className="flex flex-col justify-center items-center h-screen px-6 sm:px-12 lg:px-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl lg:text-4xl text-white font-extrabold leading-tight mb-4 text-center"
          >
            {title}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold leading-tight mb-4 text-center"
          >
            {subTitle}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="p-5"
          >
            {isButton ? (
              <Button
                text={buttonText}
                variant="primary"
                size="small"
                linkTo="/blog"
                onClick={handleButtonClick}
                className="font-semibold rounded-md"
              />
            ) : null}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
