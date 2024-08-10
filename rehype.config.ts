// rehype.config.js
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerNotationDiff } from '@shikijs/transformers';
import { transformerCopyButton } from '@rehype-pretty/transformers'

export default {
  plugins: [
    rehypePrettyCode({
      grid: true,
      theme: {
        dark: 'nord',
        light: 'nord',
      },
      defaultLang: {
        inline: "plaintext",
      },
      keepBackground: false,
      //showLineNumbers: true,
      filterMetaString: (string) => string.replace(/filename="[^"]*"/, ""),
      transformers: [
        transformerNotationDiff(),
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    }),
  ],
};