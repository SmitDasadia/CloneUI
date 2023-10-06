import Sidebar from "@/layout/Sidebar";
import React from "react";
import { Tabs, Tab } from "@/components/Tabs";
import Code from "@/components/Code";
import ReusableHead from "@/components/Head";

const head = () => {
  return (
    <div className="flex bg-[#030303]">
      <ReusableHead
        title="CloneUi - Head"
      />
      {/* Left Sidebar (Visible only on md and lg screens) */}
      <Sidebar />

      <main className="w-full text-white">
        <div className="min-h-screen">
          <h1 className="text-2xl sm:text-6xl font-bold p-5">Head</h1>

          <section className="p-5">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold p-2 text-blue-600">
              We expose a built-in component for appending elements to the head of the page:
              </h2>
              <div className="pt-4">
                <h2 className="text-xl sm:text-2xl font-semibold p-2 text-white">
                  Import
                </h2>
                <div className="pt-2 w-full sm:w-1/2">
                  <Code>{`import Head from 'next/head';`}</Code>
                </div>
              </div>

              <div className="pt-4">
                <h2 className="text-xl sm:text-2xl font-semibold p-2 text-white">
                  Usage
                </h2>
                <div className="pt-2">
                  <Tabs>
                   
                    <Tab label="Code">
                      <Code>
                        {`// pages/page.tsx
import React from "react";
import ReusableHead from "@/components/Head";

const page = () => {
  return (
    <div>
    <ReusableHead
      title="My page title"
    />
    <p>Hello world!</p>
  </div>
  );
};

export default page;
`}
                      </Code>
                    </Tab>
                  </Tabs>
                </div>
              </div>

          
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default head;


