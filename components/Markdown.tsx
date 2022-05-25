import Link from "next/link";
import ExternalLink from "./ExternalLink";

const Heading = (props: any, level: number) => {
  const anchor = encodeURIComponent(String(props.children));
  switch (level) {
    case 1:
      return (
        <h1 className="mt-8 text-4xl font-bold" id={anchor}>
          {props.children}
        </h1>
      );

    case 2:
      return (
        <h2 className="mt-6 text-3xl font-bold" id={anchor}>
          {props.children}
        </h2>
      );

    case 3:
      return (
        <h3 className="mt-4 text-2xl font-bold" id={anchor}>
          {props.children}
        </h3>
      );

    case 4:
      return (
        <h4 className="mt-3 text-xl font-bold" id={anchor}>
          {props.children}
        </h4>
      );

    case 5:
      return (
        <h5 className="mt-2 text-lg font-bold" id={anchor}>
          {props.children}
        </h5>
      );

    case 6:
      return (
        <h6 className="mt-1 text-base font-bold" id={anchor}>
          {props.children}
        </h6>
      );
  }
};

const Code = (props: any) => {
  return (
    <code className="font-mono break-words whitespace-pre-wrap">
      {props.children}
    </code>
  );
};

const Paragraph = (props: any) => {
  return <p className="my-2">{props.children}</p>;
};

const UnorderedList = ({ children }: any) => {
  return <ul className="pl-8 my-4 list-disc">{children}</ul>;
};

const OrderedList = ({ children }: any) => {
  return <ol className="pl-8 my-4 list-decimal">{children}</ol>;
};

const Hyperlink = ({ children, href }: any) => {
  if (href.startsWith("http")) {
    return (
      <ExternalLink href={href} hasUnderline>
        {children}
      </ExternalLink>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className="underline text-theme-primary">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} passHref>
      <a className="underline text-theme-primary">{children}</a>
    </Link>
  );
};

const Table = ({ children }: any) => {
  return (
    <table className="block w-full max-w-full overflow-x-auto text-sm border-collapse table-auto border-zinc-400">
      {children}
    </table>
  );
};

const TableData = ({ children, align }) => {
  align =
    align === "right"
      ? "text-right"
      : align === "left"
      ? "text-left"
      : "text-center";

  return <td className={`border border-zinc-400 p-4 ${align}`}>{children}</td>;
};

const TableHead = ({ children }) => {
  return <thead className="bg-zinc-200/75">{children}</thead>;
};

const TableHeader = ({ children, align }) => {
  align =
    align === "right"
      ? "text-right"
      : align === "left"
      ? "text-left"
      : "text-center";

  return (
    <th
      className={`border border-zinc-400 font-semibold p-4 text-slate-900 ${align}`}
    >
      {children}
    </th>
  );
};

const Markdown = {
  h1: (props) => Heading(props, 1),
  h2: (props) => Heading(props, 2),
  h3: (props) => Heading(props, 3),
  h4: (props) => Heading(props, 4),
  h5: (props) => Heading(props, 5),
  h6: (props) => Heading(props, 6),
  code: Code,
  p: Paragraph,
  ul: UnorderedList,
  ol: OrderedList,
  a: Hyperlink,
  table: Table,
  td: TableData,
  th: TableHeader,
  thead: TableHead,
};

export default Markdown;
