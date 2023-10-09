import Sidebar from "@/layout/Sidebar";
import React from "react";
import { Tabs, Tab } from "@/components/Tabs";
import { Accordion, AccordionItem } from "@/components/Accordion";
import Code from "@/components/Code";
import ReusableHead from "@/components/Head";

const accordion = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="flex bg-[#030303]">
      <ReusableHead
        title="CloneUi - Accordion"
      />
      {/* Left Sidebar (Visible only on md and lg screens) */}
      <Sidebar />

      <main className="w-full text-white">
        <div className="min-h-screen">
          <h1 className="text-2xl sm:text-6xl font-bold p-5">Accordion</h1>

          <section className="p-5">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold p-2 text-blue-600">
                Accordion display a list of high-level options that can
                expand/collapse to reveal more information.
              </h2>
              <div className="pt-4">
                <h2 className="text-xl sm:text-2xl font-semibold p-2 text-white">
                  Import
                </h2>
                <div className="pt-2">
                  <Code className="max-h-80  sm:max-w-lg ">{`import { Accordion, AccordionItem } from "@/components/Accordion";`}</Code>
                </div>
              </div>

              <div className="pt-4">
                <h2 className="text-xl sm:text-2xl font-semibold p-2 text-white">
                  Usage
                </h2>
                <div className="pt-2">
                  <Tabs>
                    <Tab label="Preview">
                      <Accordion variant="light">
                        <AccordionItem title="Accordion Item 1" variant="light">
                          {defaultContent}
                        </AccordionItem>
                        <AccordionItem title="Accordion Item 2" variant="light">
                          {defaultContent}
                        </AccordionItem>
                        <AccordionItem title="Accordion Item 3" variant="light">
                          {defaultContent}
                        </AccordionItem>
                      </Accordion>
                    </Tab>
                    <Tab label="Code">
                      <Code>
                        {`// pages/page.tsx
import React from "react";
import { Accordion, AccordionItem } from "@/components/Accordion";

const page = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <Accordion variant="light">
        <AccordionItem title="Accordion Item 1" variant="light">
          {defaultContent}
        </AccordionItem>
        <AccordionItem title="Accordion Item 2" variant="light">
          {defaultContent}
        </AccordionItem>
        <AccordionItem title="Accordion Item 3" variant="light">
          {defaultContent}
        </AccordionItem>
      </Accordion>
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

              <div className="pt-4">
                <h2 className="text-xl sm:text-2xl font-semibold p-2 text-white">
                  Variants
                </h2>

                <div className="pt-4">
                  <h2 className="text-xl sm:text-2xl font-semibold p-2 text-white">
                    Light
                  </h2>
                  <div className="pt-2">
                    <Tabs>
                      <Tab label="Preview">
                        <Accordion variant="light">
                          <AccordionItem
                            title="Accordion Item 1"
                            variant="light"
                          >
                            {defaultContent}
                          </AccordionItem>
                          <AccordionItem
                            title="Accordion Item 2"
                            variant="light"
                          >
                            {defaultContent}
                          </AccordionItem>
                          <AccordionItem
                            title="Accordion Item 3"
                            variant="light"
                          >
                            {defaultContent}
                          </AccordionItem>
                        </Accordion>
                      </Tab>
                      <Tab label="Code">
                        <Code>
                          {`// pages/page.tsx
import React from "react";
import { Accordion, AccordionItem } from "@/components/Accordion";

const page = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <Accordion variant="light">
        <AccordionItem title="Accordion Item 1" variant="light">
          {defaultContent}
        </AccordionItem>
        <AccordionItem title="Accordion Item 2" variant="light">
          {defaultContent}
        </AccordionItem>
        <AccordionItem title="Accordion Item 3" variant="light">
          {defaultContent}
        </AccordionItem>
      </Accordion>
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

                <div className="pt-4">
                  <h2 className="text-xl sm:text-2xl font-semibold p-2 text-white">
                  Bordered
                  </h2>
                  <div className="pt-2">
                    <Tabs>
                      <Tab label="Preview">
                        <Accordion variant="bordered">
                          <AccordionItem
                            title="Accordion Item 1"
                            variant="light"
                          >
                            {defaultContent}
                          </AccordionItem>
                          <AccordionItem
                            title="Accordion Item 2"
                            variant="light"
                          >
                            {defaultContent}
                          </AccordionItem>
                          <AccordionItem
                            title="Accordion Item 3"
                            variant="light"
                          >
                            {defaultContent}
                          </AccordionItem>
                        </Accordion>
                      </Tab>
                      <Tab label="Code">
                        <Code>
                          {`// pages/page.tsx
import React from "react";
import { Accordion, AccordionItem } from "@/components/Accordion";

const page = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <Accordion variant="bordered">
        <AccordionItem title="Accordion Item 1" variant="light">
          {defaultContent}
        </AccordionItem>
        <AccordionItem title="Accordion Item 2" variant="light">
          {defaultContent}
        </AccordionItem>
        <AccordionItem title="Accordion Item 3" variant="light">
          {defaultContent}
        </AccordionItem>
      </Accordion>
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

                <div className="pt-4">
                  <h2 className="text-xl sm:text-2xl font-semibold p-2 text-white">
                  Splitted
                  </h2>
                  <div className="pt-2">
                    <Tabs>
                      <Tab label="Preview">
                        <Accordion variant="splitted">
                          <AccordionItem
                            title="Accordion Item 1"
                            variant="splitted"
                          >
                            {defaultContent}
                          </AccordionItem>
                          <AccordionItem
                            title="Accordion Item 2"
                            variant="splitted"
                          >
                            {defaultContent}
                          </AccordionItem>
                          <AccordionItem
                            title="Accordion Item 3"
                            variant="splitted"
                          >
                            {defaultContent}
                          </AccordionItem>
                        </Accordion>
                      </Tab>
                      <Tab label="Code">
                        <Code>
                          {`// pages/page.tsx
import React from "react";
import { Accordion, AccordionItem } from "@/components/Accordion";

const page = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <Accordion variant="splitted">
        <AccordionItem title="Accordion Item 1" variant="splitted">
          {defaultContent}
        </AccordionItem>
        <AccordionItem title="Accordion Item 2" variant="splitted">
          {defaultContent}
        </AccordionItem>
        <AccordionItem title="Accordion Item 3" variant="splitted">
          {defaultContent}
        </AccordionItem>
      </Accordion>
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

                <div className="pt-4">
                  <h2 className="text-xl sm:text-2xl font-semibold p-2 text-white">
                  Splitted
                  </h2>
                  <div className="pt-2">
                    <Tabs>
                      <Tab label="Preview">
                        <Accordion variant="shadow">
                          <AccordionItem
                            title="Accordion Item 1"
                            variant="light"
                          >
                            {defaultContent}
                          </AccordionItem>
                          <AccordionItem
                            title="Accordion Item 2"
                            variant="light"
                          >
                            {defaultContent}
                          </AccordionItem>
                          <AccordionItem
                            title="Accordion Item 3"
                            variant="light"
                          >
                            {defaultContent}
                          </AccordionItem>
                        </Accordion>
                      </Tab>
                      <Tab label="Code">
                        <Code>
                          {`// pages/page.tsx
import React from "react";
import { Accordion, AccordionItem } from "@/components/Accordion";

const page = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <Accordion variant="shadow">
        <AccordionItem title="Accordion Item 1" variant="light">
          {defaultContent}
        </AccordionItem>
        <AccordionItem title="Accordion Item 2" variant="light">
          {defaultContent}
        </AccordionItem>
        <AccordionItem title="Accordion Item 3" variant="light">
          {defaultContent}
        </AccordionItem>
      </Accordion>
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
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default accordion;
