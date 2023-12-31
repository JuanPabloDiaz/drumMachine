const Footer = () => {
  return (
    <>
      <div className="fixed bottom-10 flex w-5/6 justify-end gap-2">
        <p className="sm:text-md text-sm font-normal text-[#5f5f5f] md:text-lg">
          Developed by:
        </p>
        <span className="sm:text-md text-sm font-normal text-[#EF5E6D] transition duration-300 hover:text-black md:text-lg">
          <a href="https://jpdiaz.dev/">Juan Diaz</a>
        </span>
      </div>
    </>
  );
};

export default Footer;
