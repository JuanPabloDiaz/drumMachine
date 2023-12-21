import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-black/90">
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
