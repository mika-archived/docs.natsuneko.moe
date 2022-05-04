import React from "react";

type Props = {
  fa: "solid" | "regular" | "light" | "duotone" | "brands";
  icon: string;
  className?: string;
};

const getStylePrefix = (s: Props["fa"]): string => {
  switch (s) {
    case "solid":
      return "fas";

    case "regular":
      return "far";

    case "light":
      return "fal";

    case "duotone":
      return "fad";

    case "brands":
      return "fab";
  }
};

const FontAwesome: React.VFC<Props> = ({ className, fa, icon }) => {
  const classNames = [getStylePrefix(fa), `fa-fw`, `fa-${icon}`].join(" ");

  return (
    <span className={className}>
      <i className={classNames} />
    </span>
  );
};

export default FontAwesome;
