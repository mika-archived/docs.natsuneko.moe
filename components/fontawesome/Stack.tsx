import React, { PropsWithChildren, ReactElement } from "react";

type Props = {
  x: string;
};

const Stack: React.FC<Props> = ({ x, children }) => {
  return (
    <span className={`fa-stack fa-${x}`}>
      {React.Children.map(children, (child, i) => {
        const item = child as ReactElement<
          PropsWithChildren<{ className?: string }>
        >;
        const classNames = [item.props.className, `fa-stack-${2 - i}x`].join(
          " "
        );

        return React.cloneElement(item, { className: classNames });
      })}
    </span>
  );
};

export default Stack;
