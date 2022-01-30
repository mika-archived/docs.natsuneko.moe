import React from "react";
import Head from "next/head";

type Props = {
  title: string;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} | Natsuneko Laboratory Docs</title>
      </Head>
      <div className="container mx-auto my-4">
        <h2 className="text-4xl font-bold my-4">{title}</h2>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
