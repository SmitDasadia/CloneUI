import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { GrGithub } from "react-icons/gr";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#030303] py-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-xl">
          {/* <Image src="/path/to/your/logo.png" alt="Your Logo" width={100} height={40} /> */}
          <Link href={"/"}>
            <h1 className="text-2xl font-bold text-blue-600 p-2 ml-4">
              CloneUI
            </h1>
          </Link>
        </div>

        <div className="md:hidden p-2 mr-4 flex items-center">
          <span className="text-blue-600 mr-3">
            <Link href={"https://github.com/SmitDasadia/CloneUI"} target="_">
              <GrGithub size={28} />
            </Link>
          </span>
          <span onClick={toggleMenu} className="text-blue-600">
            {isOpen ? <CgClose size={30} /> : <CgMenuRightAlt size={30} />}
          </span>
        </div>

        <div className="hidden sm:flex sm:justify-center sm:items-center sm:mx-auto space-x-5">
          <NavLink
            href="/docs"
            label="Docs"
            currentPath={router.pathname}
            className=" text-xl font-semibold hover:text-blue-900"
          />
          <NavLink
            href="/docs/components/accordion"
            label="Components"
            currentPath={router.pathname}
            className=" text-xl font-semibold hover:text-blue-900"
          />
          <NavLink
            href="/blog"
            label="Blog"
            currentPath={router.pathname}
            className=" text-xl font-semibold hover:text-blue-900"
          />
        </div>
        <div className="hidden md:block p-2 mr-4">
          <Link href={"https://github.com/SmitDasadia/CloneUI"} target="_">
            <span className="text-blue-600 mr-4">
              <GrGithub size={28} />
            </span>
          </Link>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#030303] fixed top-0 left-0 right-0 bottom-0 z-50 "
          >
            <div className="container mx-auto py-4">
              <span
                onClick={closeMenu}
                className="text-blue-600 absolute top-0 right-0 p-8"
              >
                <CgClose size={30} />
              </span>
              <div className="pt-10 pb-10">
                <NavLink
                  href="/docs"
                  label="Docs"
                  className="p-10 py-5 text-xl font-semibold"
                  currentPath={router.pathname}
                  closeMenu={closeMenu}
                />
                <NavLink
                  href="/docs/installation"
                  label="Installation"
                  className="px-20 py-3 text-xl font-semibold"
                  currentPath={router.pathname}
                  closeMenu={closeMenu}
                />
                <NavLink
                  href="/docs/designprinciples"
                  label="Design Principles"
                  className="px-20 py-3 text-xl font-semibold"
                  currentPath={router.pathname}
                  closeMenu={closeMenu}
                />
                <NavLink
                  href="/docs/about"
                  label="About"
                  className="px-20 py-3 text-xl font-semibold"
                  currentPath={router.pathname}
                  closeMenu={closeMenu}
                />
                <NavLink
                  href=""
                  label="Framewrok"
                  className="p-10 py-5 text-xl font-semibold"
                  currentPath={router.pathname}
                  closeMenu={closeMenu}
                />
                <NavLink
                  href="/docs/framework/nextjs"
                  label="NextJS"
                  className="px-20 py-3 text-xl font-semibold"
                  currentPath={router.pathname}
                  closeMenu={closeMenu}
                />
                <NavLink
                  href=""
                  label="Components"
                  className="p-10 py-5 text-xl font-semibold"
                  currentPath={router.pathname}
                  closeMenu={closeMenu}
                />

                <NavLink
                  href="/docs/components/accordion"
                  label="Accordion"
                  className="px-20 py-3 text-xl font-semibold"
                  currentPath={router.pathname}
                  closeMenu={closeMenu}
                />

                <NavLink
                  href="/docs/components/head"
                  label="Head"
                  className="px-20 py-3 text-xl font-semibold"
                  currentPath={router.pathname}
                  closeMenu={closeMenu}
                />

                <NavLink
                  href="/blog"
                  label="Blog"
                  className="p-10 py-5 text-xl font-semibold"
                  currentPath={router.pathname}
                  closeMenu={closeMenu}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  currentPath: string;
  className?: string;
  closeMenu?: () => void; // Add the closeMenu prop
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  currentPath,
  className,
  closeMenu, // Make sure to destructure it here
}) => (
  <Link href={href}>
    <p
      className={` ${
        currentPath === href ? "font-bold text-blue-800" : "text-white"
      } ${className}`}
      onClick={closeMenu} // Call closeMenu when the link is clicked
    >
      {label}
    </p>
  </Link>
);

export default Navigation;
