import React, { useState, ReactNode } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
  children: ReactNode;
  variant: "shadow" | "bordered" | "splitted" | "light";
}

export const Accordion: React.FC<AccordionProps> = ({ children, variant }) => {
  const variantClass = {
    shadow: "bg-[#232323] p-5 rounded-md",
    bordered: "border rounded-md p-5",
    splitted: "p-5",
    light: "",
  }[variant];
  return <div className={`space-y-2 ${variantClass}`}>{children}</div>;
};

interface AccordionItemProps {
  title: string;
  initialOpen?: boolean;
  className?: string;
  children: ReactNode;
  variant: "shadow" | "bordered" | "splitted" | "light";
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  initialOpen = false,
  className = "",
  children,
  variant,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const itemVariantClass = variant === "splitted" ? "bg-[#282528] rounded-md" : "border-b ";

  return (
    <div className={`${itemVariantClass} ${className}`}>
      <button
        className="w-full p-4 text-left text-lg font-semibold flex items-center justify-between focus:outline-none"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto", opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="p-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
