// next.config.mjs
import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.mjs",
});

export default withNextra({
  // Qualquer outra configuração adicional do Next.js
  reactStrictMode: true,
});
