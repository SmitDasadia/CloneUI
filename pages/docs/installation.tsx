import Sidebar from "@/layout/Sidebar";
import React from "react";
import Link from "next/link";
import ReusableHead from "@/components/Head";

const installation = () => {
  return (
    <div className="flex bg-[#030303]">
      <ReusableHead
        title="CloneUi - Installation"
      />
      {/* Left Sidebar (Visible only on md and lg screens) */}
      <Sidebar />

      {/* Main Content */}
      <main className="w-full text-white">
        <div className="min-h-screen">
          <h1 className="text-2xl sm:text-6xl font-bold p-5">Installation</h1>

          {/* Requirements Section */}
          <section className="p-5">
            <h2 className="text-lg sm:text-xl font-semibold p-2 text-blue-600">
              Requirements:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
              <div className="p-6 border-[0.2px] rounded-lg text-center hover:bg-[#06021E]">
                <h3 className="text-lg sm:text-xl font-semibold py-2">
                  React 18 or later
                </h3>
                {/* Add more details if needed */}
              </div>
              <div className="p-6 border-[0.2px] rounded-lg text-center hover:bg-[#06021E]">
                <h3 className="text-lg sm:text-xl font-semibold py-2">
                  Tailwind CSS 3 or later
                </h3>
                {/* Add more details if needed */}
              </div>
              <div className="p-6 border-[0.2px] rounded-lg text-center hover:bg-[#06021E]">
                <h3 className="text-lg sm:text-xl font-semibold py-2">
                  Framer Motion 4 or later
                </h3>
                {/* Add more details if needed */}
              </div>
            </div>
          </section>

          {/* Framework Section */}
          <section className="p-5">
            <h2 className="text-lg sm:text-xl font-semibold p-2 text-blue-600">
              FrameWork:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
              <Link href={"/framework/nextjs"}>
                <div className="p-6 border-[0.2px] rounded-lg text-center hover:bg-[#06021E]">
                  <h3 className="text-lg sm:text-xl font-semibold py-2">
                    NextJS
                  </h3>
                  {/* Add more details if needed */}
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default installation;
