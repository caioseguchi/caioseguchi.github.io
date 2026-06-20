/** Site configuration — edit this file to customize your blog. */
export const site = {
  /** Production URL (no trailing slash). */
  baseUrl: "https://caioseguchi.github.io",
  /** GitHub Pages subpath, e.g. "/repo-name". Leave empty for root deploy. */
  repoSubpath: "",
  title: "Caio Seguchi",
  description:
    "A static notebook for data science, minimalism, and the open web.",
  author: "Caio Seguchi",
  /** UI language: "zh-CN" | "en" */
  language: "en" as "zh-CN" | "en",
  maxPostsOnIndex: 5,
  copyright: {
    enable: true,
    type: "CC_BY_NC_SA_4_0" as const,
    customText: "",
    showLicenseIcon: true,
    showStandardFormat: true,
    additionalNote: "",
  },
} as const;

export type SiteConfig = typeof site;
