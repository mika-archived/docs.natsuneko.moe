import ExternalLink from "./ExternalLink";

const Heading = (props: any, level: number) => {
  switch (level) {
    case 1:
      return <h1 className="mt-8 text-4xl font-bold">{props.children}</h1>;

    case 2:
      return <h2 className="mt-6 text-3xl font-bold">{props.children}</h2>;

    case 3:
      return <h3 className="mt-4 text-2xl font-bold">{props.children}</h3>;

    case 4:
      return <h4 className="mt-3 text-xl font-bold">{props.children}</h4>;

    case 5:
      return <h5 className="mt-2 text-lg font-bold">{props.children}</h5>;

    case 6:
      return <h6 className="mt-1 text-base font-bold">{props.children}</h6>;
  }
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
  return (
    <ExternalLink href={href} hasUnderline>
      {children}
    </ExternalLink>
  );
};

const Markdown = {
  h1: (props) => Heading(props, 1),
  h2: (props) => Heading(props, 2),
  h3: (props) => Heading(props, 3),
  h4: (props) => Heading(props, 4),
  h5: (props) => Heading(props, 5),
  h6: (props) => Heading(props, 6),
  p: Paragraph,
  ul: UnorderedList,
  ol: OrderedList,
  a: Hyperlink,
};

export default Markdown;
