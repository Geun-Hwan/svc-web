// craco.config.js
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"), // @을 src 폴더로 매핑
      "@lib": path.resolve(__dirname, "src/lib"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@store": path.resolve(__dirname, "src/store"),
      "@tmp": path.resolve(__dirname, "src/elements/templates/index.ts"), // index.ts로 매핑
      "@cmp": path.resolve(__dirname, "src/elements/components"),
      "@atm": path.resolve(__dirname, "src/elements/atoms"),
    },
  },
};
