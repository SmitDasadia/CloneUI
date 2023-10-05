const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030303] text-white body-font">
      <div className="container px-5 py-8 mx-auto flex justify-center items-center">
        <p className="text-lg font-semibold  ">
          {" "}
          <span className="text-gray-600">Create By </span>
          <span className="text-blue-600 text-semiblod">Smit Dasadia</span>{" "}
          &copy; {new Date().getFullYear()} CloneUi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
