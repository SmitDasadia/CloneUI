import ReusableHead from "@/components/Head";
import Sidebar from "@/layout/Sidebar";
import React from "react";

const designprinciples = () => {
  return (
    <div className="flex bg-[#030303]">
      <ReusableHead
        title="CloneUi - Design Principles"
      />
      {/* Left Sidebar (Visible only on md and lg screens) */}
      <Sidebar />

      {/* Main Content */}
      <main className="w-full text-white">
        <div className="min-h-screen">
          <h1 className="text-2xl sm:text-6xl  font-bold p-5">
            Design Principles
          </h1>

          <div className="p-5">
            <h2 className="text-lg sm:text-xl  font-semibold p-5 ">
              The development of CloneUI has been guided by a set of specific
              design and API principles. These principles serve as the
              foundation for our library and play a crucial role in ensuring the
              efficiency, effectiveness, and user-friendliness of the components
              we offer.
            </h2>
           
          </div>
          <div className="p-5">
            <h2 className="text-lg sm:text-xl  font-semibold p-5 text-blue-600">
              Simplicity and Usability
            </h2>
            <h3 className="text-lg sm:text-xl  font-semibold p-5">
              Simplicity is the ultimate sophistication. At CloneUI, we believe
              in delivering simple and intuitive components. Our design process
              centers around the user, ensuring that we deliver tools that are
              easy to understand, configure, and implement, regardless of a
              developer&aposs expertise level.
            </h3>
          </div>
          <div className="p-5">
            <h2 className="text-lg sm:text-xl  font-semibold p-5 text-blue-600">
              Modular Design
            </h2>
            <h3 className="text-lg sm:text-xl  font-semibold p-5">
              Each component in CloneUI is designed as a standalone module. This
              modular approach allows developers to import and use only what
              they need, leading to lighter applications and faster load times.
            </h3>
          </div>
          <div className="p-5">
            <h2 className="text-lg sm:text-xl  font-semibold p-5 text-blue-600">
              Customization and Flexibility
            </h2>
            <h3 className="text-lg sm:text-xl  font-semibold p-5">
              CloneUI is designed with customization at its core. Whether
              it&aposs theming or overriding styles, we provide developers with
              comprehensive control over the aesthetics of the components. Our
              integration with the{" "}
              <span className="text-lg sm:text-xl  font-semibold  text-blue-600">
                TailwindCSS
              </span>
              , simplifies the customization process and enables an extensive
              range of design possibilities.
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default designprinciples;
