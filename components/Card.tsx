import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  backgroundColor?: string; 
  backgroundImage?: string; 
  header?: ReactNode; 
  className?: string; 
}

interface CardBodyProps {
  children: ReactNode;
}

interface CardHeaderProps {
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, backgroundColor, backgroundImage, header, className }) => {
  const cardStyles = `rounded-lg shadow-lg p-4 ${backgroundColor || "bg-white"} ${className || ""}`;
  const cardBackgroundStyles = backgroundImage ? `bg-cover bg-center bg-no-repeat bg-opacity-70` : "";
  
  const cardStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
  };
  
  return (
    <div className={`${cardStyles} ${cardBackgroundStyles}`} style={cardStyle}>
      {header && <div className="mb-2">{header}</div>}
      {children}
    </div>
  );
};

export const CardBody: React.FC<CardBodyProps> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return <div className="mb-2">{children}</div>;
};
