import React from "react";

type Props = {
  title: string;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Layout;
