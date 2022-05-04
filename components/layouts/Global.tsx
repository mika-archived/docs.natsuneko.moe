import React from "react";
import Footer from "../Footer";
import Header from "../GlobalHeader";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen text-neutral-800">
      <div className="flex flex-col w-full min-h-screen">
        <Header />
        <div className="flex flex-grow w-full h-full">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
