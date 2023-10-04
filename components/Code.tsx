import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

interface CodeProps {
  children: string;
}

const Code: React.FC<CodeProps> = ({ children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = children;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <div className="relative">
      <pre className="bg-[#181818] rounded-md p-4 text-white">
        <code>{children}</code>
      </pre>
      <button
        onClick={handleCopyClick}
        className="absolute top-2 right-2 p-1 text-xs text-white rounded hover:bg-gray-500 transition"
      >
        {copied ? <FiCheck /> : <FiCopy />}
      </button>
      
    </div>
  );
};

export default Code;
