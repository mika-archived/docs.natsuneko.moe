import React from "react";

type Props = {
  title: string;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
