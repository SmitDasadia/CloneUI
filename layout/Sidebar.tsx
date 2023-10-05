import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const [buttonOpen, setButtonOpen] = useState(false);

  const toggleGuide = () => {
    setButtonOpen(!buttonOpen);
  };

  return (
    <aside className="hidden bg-[#030303] md:block w-2/6 px-10 p-8 text-white">
      <div className="">
        <h2
          className="text-lg font-semibold mb-4 flex items-center cursor-pointer"
          onClick={toggleGuide}
        >
          Guide{" "}
          {buttonOpen ? (
            <FiChevronDown className="ml-2" />
          ) : (
            <FiChevronRight className="ml-2" />
          )}
        </h2>
        <AnimatePresence>
          {buttonOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }} // Add ease property for smoother animation
              className="p-4"
            >
              <ul className="space-y-2">
                <SidebarLink
                  href="/docs/installation"
                  label="Installation"
                  currentPath={router.pathname}
                  className="text-md font-semibold py-3"
                />
                <SidebarLink
                  href="/docs/designprinciples"
                  label="Design Principles"
                  currentPath={router.pathname}
                  className="text-md font-semibold py-3"
                />
                <SidebarLink
                  href="/docs/about"
                  label="About"
                  currentPath={router.pathname}
                  className="text-md font-semibold py-3"
                />

                {/* Add more guide links here */}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="">
        <h2 className="text-lg font-semibold mb-4">Framework</h2>
        {/* Add your framework links */}
      </div>
      <div className="">
        <h2 className="text-lg font-semibold mb-4">Components</h2>
        {/* Add your components with nested links */}
      </div>
    </aside>
  );
};

export default Sidebar;

interface NavLinkProps {
  href: string;
  label: string;
  currentPath: string;
  className?: string;
}

const SidebarLink: React.FC<NavLinkProps> = ({
  href,
  label,
  currentPath,
  className,
}) => (
  <Link href={href}>
    <p
      className={`text-white ${
        currentPath === href ? "font-bold text-blue-800 " : ""
      } ${className}`}
    >
      {label}
    </p>
  </Link>
);
