import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Docs | Marktag SDK",
  description: "The documentation site for marktag sdk ",
  base: "/marktag-docs/",
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: "https://markopolo-inc.github.io/marktag-docs",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    search: {
      provider: "local",
    },
    logo: "/logo.svg",
    editLink: {
      pattern: "https://github.com/markopolo-inc/marktag-docs/edit/main/:path",
      text: "Edit this page on GitHub",
    },
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is MarkTag?", link: "/introduction/introduction" },
          { text: "Getting started", link: "/introduction/getting-started" },
        ],
      },
      {
        text: "React Native",
        items: [
          { text: "Installation", link: "/react-native/installation" },
          { text: "Identify User", link: "/react-native/identify-user" },
          { text: "Usage", link: "/react-native/usage" },
        ],
      },
      {
        text: "Web SDK",
        items: [
          { text: "Installation", link: "/web-sdk/installation" },
          { text: "Usage", link: "/web-sdk/usage" },
        ],
      },
      {
        text: "REST API",
        items: [
          { text: "Prerequisites", link: "/rest-api/prerequisites" },
          { text: "Example", link: "/rest-api/example" },
          { text: "Usage", link: "/rest-api/usage" },
        ],
      },
      // {
      //   text: "SDKs",
      //   items: [
      //     // { text: "Identify user", link: "/log-events/identify-user" },
      //     // { text: "Automatic logging", link: "/log-events/automatic-logging" },
      //     // { text: "Manual logging", link: "/log-events/manual-logging" },
      //     { text: "Web SDK", link: "/sdk/web-sdk.md" },
      //     { text: "React Native", link: "/sdk/react-native.md" },
      //     { text: "REST API", link: "/sdk/rest-api.md" },
      //   ],
      // },
      // {
      //   text: "Compliance",
      //   items: [
      //     {
      //       text: "Data collection and usage",
      //       link: "/compliance/data-collection-and-usage.md",
      //     },
      //   ],
      // },
    ],
    footer: {
      copyright: "Copyright © 2019-present Markopolo AI",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/markopolo-inc/marktag-docs" },
    ],
  },
});
