import Sidebar from "@/layout/Sidebar";
import React from "react";
import StepComponent from "@/components/Steps";
import ReusableHead from "@/components/Head";
const nextjs = () => {
  // Step 4 code snippet object
  const step4Snippet = {
    title: "Use CloneUI Component",
    description:
      "Now you can import any CloneUi component directly from our website and use it. First, make a new folder called components and paste any component with their name.tsx.",
    code: `// pages/page.tsx
import Button from "@/components/Button";
import React from "react";

const page = () => {
  const handleButtonClick = () => {
    // Handle button click logic here
  };

  return (
    <Button
      text={"Button"}
      variant="primary"
      size="small"
      linkTo="/blog"
      onClick={handleButtonClick}
      className="font-semibold rounded-md"
    />
  );
};

export default page;
`,
  };

  return (
    <div className="flex bg-[#030303]">
      <ReusableHead
        title="CloneUi - NextJS"
      />
      {/* Left Sidebar (Visible only on md and lg screens) */}
      <Sidebar />

      <main className="w-full text-white">
        <div className="min-h-screen">
          <h1 className="text-2xl sm:text-6xl font-bold p-5">NextJS</h1>

          <section className="p-5">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold p-2 text-blue-600">
                Install and configure Next.js.
              </h2>

              <div className="pt-10">
                <StepComponent
                  stepNumber={1}
                  title="Install Next.js"
                  description="Install Next.js with one of the following commands in your terminal."
                  codeSnippet="npx create-next-app@latest"
                />
                <StepComponent
                  stepNumber={2}
                  title="Install Framer Motion"
                  description="Install Framer Motion in your terminal."
                  codeSnippet="npm install framer-motion"
                />
                <StepComponent
                  stepNumber={3}
                  title="Install React Icons"
                  description="Install React Icons in your terminal."
                  codeSnippet="npm install react-icons --save"
                />
                <StepComponent
                  stepNumber={4}
                  title={step4Snippet.title}
                  description={step4Snippet.description}
                  codeSnippet={step4Snippet.code}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default nextjs;
