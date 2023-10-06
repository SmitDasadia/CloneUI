import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const [buttonOpen, setButtonOpen] = useState(false);
  const [frameworkButtonOpen, setframeworkButtonOpen] = useState(false);
  const [componentButtonOpen, setComponentButtonOpen] = useState(false);

  const toggleGuide = () => {
    setButtonOpen(!buttonOpen);
  };

  const framewrokToggleGuide = () => {
    setframeworkButtonOpen(!frameworkButtonOpen);
  };

  const componentToggleGuide = () => {
    setComponentButtonOpen(!componentButtonOpen);
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
              className="p-4"
            >
              <ul className="space-y-2">
                <SidebarLink
                  href="/docs/installation"
                  label="Installation"
                  currentPath={router.pathname}
                  className="text-md font-semibold py-3 hover:text-blue-800"
                />
                <SidebarLink
                  href="/docs/designprinciples"
                  label="Design Principles"
                  currentPath={router.pathname}
                  className="text-md font-semibold py-3 hover:text-blue-800"
                />
                <SidebarLink
                  href="/docs/about"
                  label="About"
                  currentPath={router.pathname}
                  className="text-md font-semibold py-3 hover:text-blue-800"
                />

                {/* Add more guide links here */}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="">
        <h2
          className="text-lg font-semibold mb-4 flex items-center cursor-pointer"
          onClick={framewrokToggleGuide}
        >
          Framework{" "}
          {frameworkButtonOpen ? (
            <FiChevronDown className="ml-2" />
          ) : (
            <FiChevronRight className="ml-2" />
          )}
        </h2>
        <AnimatePresence>
          {frameworkButtonOpen && (
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
              className="p-4"
            >
              <ul className="space-y-2">
                <SidebarLink
                  href="/docs/framework/nextjs"
                  label="NextJS"
                  currentPath={router.pathname}
                  className="text-md font-semibold py-3 hover:text-blue-800"
                />
                

                {/* Add more guide links here */}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="">
        <h2
          className="text-lg font-semibold mb-4 flex items-center cursor-pointer"
          onClick={componentToggleGuide}
        >
          Components{" "}
          {componentButtonOpen ? (
            <FiChevronDown className="ml-2" />
          ) : (
            <FiChevronRight className="ml-2" />
          )}
        </h2>
        <AnimatePresence>
          {componentButtonOpen && (
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
              className="p-4"
            >
              <ul className="space-y-2">
                <SidebarLink
                  href="/docs/components/accordion"
                  label="Accordion"
                  currentPath={router.pathname}
                  className="text-md font-semibold py-3 hover:text-blue-800"
                />
                <SidebarLink
                  href="/docs/components/head"
                  label="Head"
                  currentPath={router.pathname}
                  className="text-md font-semibold py-3 hover:text-blue-800"
                />
                
                

                {/* Add more guide links here */}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
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
        currentPath === href ? "font-bold text-blue-800" : "text-white"
      } ${className}`}
    >
      {label}
    </p>
  </Link>
);
