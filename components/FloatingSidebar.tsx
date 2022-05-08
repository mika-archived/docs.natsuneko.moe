import React from "react";
import InternalLink from "next/link";
import { allWikis } from "contentlayer/generated";
import { normalizePath, normalizeTitle } from "utils/contents";
import { useRouter } from "next/router";

type Props = {
  items: string[];
  onClickItem: () => void;
};

const FloatingSidebar: React.VFC<Props> = ({ items, onClickItem }) => {
  const router = useRouter();

  const findItem = (url) => {
    return allWikis.find(
      (wiki) => `/${normalizePath(wiki.slug).join("/")}/` === url
    );
  };

  return (
    <div className="w-full h-full min-h-full">
      <div className="my-2">
        <h4 className="text-xl font-bold">{findItem(items[0]).title}</h4>
      </div>
      <ul>
        {items.map((w) => {
          const item = findItem(w);
          if (item === undefined) return null;

          const isVisit =
            router.asPath === `/${normalizePath(item.slug).join("/")}/`;

          return (
            <li key={w} className="my-2 cursor-pointer" onClick={onClickItem}>
              <InternalLink href={w}>
                <p className={isVisit ? "text-orange-600 font-bold" : ""}>
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

export default FloatingSidebar;
