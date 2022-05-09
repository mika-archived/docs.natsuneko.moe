import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";
import GitHub from "remark-gfm";
import CodeTitles from "rehype-code-titles";

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFilePath.replace(/\.mdx$/, ""),
  },
};

const Wiki = defineDocumentType(() => ({
  name: "Wiki",
  filePathPattern: "wiki/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    lang: { type: "string", required: false },
    category: { type: "string", required: false },
    priority: { type: "number", required: false },
    sidebar: { type: "boolean", required: false, default: false },
  },
  computedFields,
}));

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    lang: { type: "string", required: false },
  },
  computedFields,
}));

const config = makeSource({
  contentDirPath: "contents",
  documentTypes: [Wiki, Blog],
  mdx: {
    remarkPlugins: [GitHub],
    rehypePlugins: [CodeTitles],
  },
});

export default config;
