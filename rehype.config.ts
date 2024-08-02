// rehype.config.js
import rehypePrettyCode from 'rehype-pretty-code';

export default {
  plugins: [
    rehypePrettyCode({
      theme: {
        dark: 'nord',
        light: 'nord',
      },
      defaultLang: {
    inline: "plaintext",
  },
      keepBackground: false,
    }),
  ],
};