import React, { useEffect, useState } from "react";

type Props = {
  onToggleHamburgerState: (state: boolean) => void;
  parentState: boolean;
};

const WikiHeader: React.VFC<Props> = ({
  onToggleHamburgerState,
  parentState,
}) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(parentState);
  }, [parentState]);

  const onClickHamburger = () => {
    const newState = !state;
    setState(newState);

    onToggleHamburgerState(newState);
  };

  return (
    <div className="w-full border-b border-neutral-500">
      <div className="container w-full py-2 mx-auto">
        <div className="inline-block" onClick={onClickHamburger}>
          <svg viewBox="0 0 100 60" width="40" height="40">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WikiHeader;
