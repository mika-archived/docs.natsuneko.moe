import React from "react";
import Link from "next/link";

type Props = React.ComponentProps<typeof Link>;

const InternalLink: React.VFC<Props> = (props) => {
  return (
    <Link {...props}>
      <div className="inline cursor-pointer text-theme-link">
        {props.children}
      </div>
    </Link>
  );
};

export default InternalLink;
