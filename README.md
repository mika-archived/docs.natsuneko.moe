# docs.natsuneko.moe

Next.js based static documentation site for Natsuneko Laboratory.

- Framework: [Next.js](https://nextjs.org/)
- Deployment: [Vercel](https://vercel.com/)
- Content: [MDX](https://mdxjs.com/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)

## Writing Document

1. Create a new markdown with `.mdx` extension in `docs` directory.
2. Run `yarn run dev` in terminal.
3. Open `http://localhost:3000/` in browser.
4. Write your documentation.

The file-system structure under `contents` is used as is for the documentation routing.

### Translation

All Markdown documents must meet one of the following conditions:

- front-matter has a `lang` key.
- a language-key at the end of the file name, such as `en-US`, `ja-JP`.

If the document has multiple languages, write the language name at the end of the filename, otherwise; give front-matter the lang key.

## Develop Components

1. Run `yarn run dev` in terminal.
2. Open `http://localhost:3000/` in browser.
3. Write your component.

## License

- The documentation is licensed under the CC-BY-SA 4.0.
- The source code is licensed under the MIT License.
