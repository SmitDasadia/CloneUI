import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Sidebar from "@/layout/Sidebar";
import ReusableHead from "@/components/Head";

const DocsLayout: React.FC = ({}) => {
  return (
    <div className="flex bg-[#030303]">
      <ReusableHead
        title="CloneUi - Docs"
      />
      {/* Left Sidebar (Visible only on md and lg screens) */}
      <Sidebar />

      {/* Main Content */}
      <main className="w-full text-white">
        <div className="min-h-screen">
          <h1 className="text-2xl sm:text-6xl  font-bold p-5">Introduction</h1>
          <h2 className="text-lg sm:text-xl  font-semibold p-5">
            Welcome to the CloneUI documentation!
          </h2>

          <div className="p-5">
            <h2 className="text-lg sm:text-xl  font-semibold p-5 text-blue-600">
              What is CloneUI?
            </h2>
            <h3 className="text-lg sm:text-xl  font-semibold p-5">
              CloneUi is Re-usable components built Tailwind CSS, Framer Motion,
              React Icons with simple{" "}
              <span className="text-lg sm:text-xl  font-semibold  text-blue-600">
                Copy N Paste.
              </span>
            </h3>
            <h3 className="text-lg sm:text-xl  font-semibold p-5">
              No need to install any libaray or component library.Pick the components you need. Copy and paste the code into your
              project and customize to your needs. The code is yours.
            </h3>
          </div>
          <div className="p-5">
            <h2 className="text-lg sm:text-xl  font-semibold p-5 text-blue-600">
              Why CloneUI uses Framer Motion?
            </h2>
            <h3 className="text-lg sm:text-xl  font-semibold p-5">
              We use Framer Motion to animate some components due to the
              complexity of the animations and their physics-based nature.
              Framer Motion allows us to handle these animations in a more
              straightforward and performant way in addition it is well tested
              and production ready.
            </h3>
          </div>
          <div className="p-5">
            <h2 className="text-lg sm:text-xl  font-semibold p-5 text-blue-600">
            Can I use CloneUI with other front-end frameworks or libraries, such as Vue or Angular?
            </h2>
            <h3 className="text-lg sm:text-xl  font-semibold p-5">
            No, CloneUI is specifically designed for React as it is built on top of React Aria. However, you can still use the NextUI components styling part with other frameworks or libraries.
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DocsLayout;
