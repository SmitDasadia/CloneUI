
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
type ToastProps = {
  message: string;
};

const Toast: React.FC<ToastProps> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Auto-dismiss after 5 seconds
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-2 right-2  p-3 rounded-md bg-[#181818] text-white w-72 border-[0.1px]"
        >
          <div className="flex justify-between items-center">
            <div className="text-sm">{message}</div>
            <button onClick={handleClose} className="text-sm underline">
              <FiX />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
