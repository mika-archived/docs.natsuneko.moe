import React from "react";
import InternalLink from "next/link";
import { allWikis } from "contentlayer/generated";
import { normalizePath, normalizeTitle } from "utils/contents";
import { useRouter } from "next/router";

type Props = {
  items: { title: string; url: string }[];
};

const Sidebar: React.VFC<Props> = ({ items }) => {
  const router = useRouter();

  return (
    <div className="h-full px-2 pt-4 mr-4">
      <div className="my-2">
        <h4 className="text-xl font-bold">{items[0].title}</h4>
      </div>
      <ul>
        {items.map((item) => {
          const isVisit = router.asPath === `/${item.url}/`;

          return (
            <li key={item.url} className="my-2 cursor-pointer">
              <InternalLink href={item.url}>
                <p className={isVisit ? " text-theme-primary font-bold" : ""}>
                  {normalizeTitle(item.title)}
                </p>
              </InternalLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
