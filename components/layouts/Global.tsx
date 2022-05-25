import React from "react";

import { DrawerContext } from "components/Drawer";
import Footer from "components/GlobalFooter";
import Header from "components/GlobalHeader";
import useDrawer from "hooks/useDrawer";

const Layout: React.FC = ({ children }) => {
  return (
    <DrawerContext.Provider value={useDrawer()}>
      <div className="min-h-screen text-theme-text">
        <div className="flex flex-col w-full min-h-screen">
          <Header />
          <div className="flex flex-grow w-full h-full">{children}</div>
          <Footer />
        </div>
      </div>
    </DrawerContext.Provider>
  );
};

export default Layout;
