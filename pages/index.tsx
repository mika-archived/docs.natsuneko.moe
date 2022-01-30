import React from "react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const getStaticProps: GetStaticProps<{}> = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
};

const Home: React.VFC = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-fuchsia-400/20 w-full h-64">
        <div className="container mx-auto my-8">
          <h2 className="text-4xl font-bold">
            Natsuneko Laboratory Documentation
          </h2>
        </div>
      </div>
      <div className="container mx-auto my-8">
        <h4 className="text-xl font-bold my-2">Support</h4>
        <p>
          If you have any questions, please contact at&nbsp;
          <code>me@natsuneko.cat</code> or Twitter.
        </p>
      </div>
    </div>
  );
};

export { getStaticProps };

export default Home;
