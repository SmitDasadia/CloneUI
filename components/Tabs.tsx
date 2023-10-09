// components/Tabs.tsx

import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TabProps {
  label: string;
  children: ReactNode;
  className?: string;
}

const Tab: React.FC<TabProps> = ({ label, children , className}) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

interface TabsProps {
  children: ReactNode;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ children, className }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs = React.Children.toArray(children) as React.ReactElement<TabProps>[];

  return (
    <div className="w-full sm:w-3/4">
      <div className="flex space-x-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              index === activeTab
                ? ' text-blue-600 font-semibold text-lg'
                : 'text-white font-semibold text-lg'
            } rounded-md`}
            onClick={() => handleTabClick(index)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode='wait'>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`pt-4 p-4 ${className} max-h-80 max-w-5xl overflow-y-auto`}
        >
          {tabs[activeTab].props.children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export { Tabs, Tab };
