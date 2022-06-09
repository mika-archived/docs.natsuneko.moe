import React from "react";
import InternalLink from "next/link";
import { normalizeTitle } from "utils/contents";
import { useRouter } from "next/router";

type Props = {
  items: { title: string; url: string }[];
  style: "sidebar" | "drawer";
};

const Sidebar: React.VFC<Props> = ({ items, style }) => {
  const router = useRouter();
  const titleFont = style === "sidebar" ? "text-xl" : "text-2xl";
  const sectionFont = style === "sidebar" ? "text-md" : "text-lg";

  return (
    <div className="h-full px-2 pt-4 mr-4">
      <div className="my-2">
        <h4 className={`${titleFont} font-bold`}>{items[0].title}</h4>
      </div>
      <ul className={sectionFont}>
        {items.map((item) => {
          const isVisit = router.asPath === `/${item.url}/`;

          return (
            <li
              key={item.url}
              className={`${
                isVisit ? "bg-theme-bg rounded" : ""
              } cursor-pointer py-2`}
            >
              <InternalLink href={item.url}>
                <p
                  className={`${
                    isVisit ? " text-theme-primary font-bold" : ""
                  } px-2`}
                >
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
