import React from "react";
import Footer from "../Footer";
import Header from "../GlobalHeader";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="text-zinc-300 bg-zinc-800  min-h-screen">
      <div className="flex flex-col w-full min-h-screen">
        <Header />
        <div className="flex flex-grow w-full">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
