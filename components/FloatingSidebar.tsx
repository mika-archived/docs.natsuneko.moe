import React from "react";
import InternalLink from "next/link";
import { allWikis } from "contentlayer/generated";
import { normalizePath, normalizeTitle } from "utils/contents";
import { useRouter } from "next/router";

type Props = {
  items: { title: string; url: string }[];
  onClickItem: () => void;
};

const FloatingSidebar: React.VFC<Props> = ({ items, onClickItem }) => {
  const router = useRouter();

  const findItem = (url) => {
    return items.find((wiki) => `/${wiki.url}/` === url);
  };

  return (
    <div className="w-full h-full min-h-full">
      <div className="my-2">
        <h4 className="text-xl font-bold">{items[0].title}</h4>
      </div>
      <ul>
        {items.map((item) => {
          const isVisit = router.asPath === `/${item.url}/`;

          return (
            <li
              key={item.url}
              className="my-2 cursor-pointer"
              onClick={onClickItem}
            >
              <InternalLink href={item.url}>
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
