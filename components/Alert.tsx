import React from "react";

type Props = {
  title: string;
  type: "success" | "warning" | "info" | "danger";
};

const Alert: React.FC<Props> = ({ title, type, children }) => {
  const colors = {
    success: ["bg-general-success-primary", "border-general-success-secondary"],
    warning: ["bg-general-warning-primary", "border-general-warning-secondary"],
    info: ["bg-general-info-primary", "border-general-info-secondary"],
    danger: ["bg-general-danger-primary", "border-general-danger-secondary"],
  };

  const cls = colors[type].join(" ");
  return (
    <div className={`py-4 px-4 border-l-8 text-theme-white mb-8 ${cls}`}>
      <div className="mb-2 text-2xl font-bold">{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default Alert;
