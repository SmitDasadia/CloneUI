import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

interface HeroProps {
  title: string;
  backgroundColor: string;
  buttonText: string;
}

const Hero: React.FC<HeroProps> = ({ title, backgroundColor, buttonText }) => {
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
            className="text-3xl sm:text-5xl lg:text-6xl text-white font-extrabold leading-tight mb-4 text-center"
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="p-5"
          >
            <Button
              text={buttonText}
              variant="primary"
              size="medium"
              linkTo="/blog"
              onClick={handleButtonClick}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
