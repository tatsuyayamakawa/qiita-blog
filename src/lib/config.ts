/**
 * サイト全体の設定
 */
export const siteConfig = {
  title: "Qiita Blog",
  description: "Qiita APIを利用したBlogです",
  domain: "qiita-blog.com",
  url: "https://qiita-blog.com",
};

/**
 * Qiita API設定
 */
export const qiitaConfig = {
  get userId(): string {
    return process.env.QIITA_USER_ID || "qiita";
  },

  accessToken: process.env.QIITA_ACCESS_TOKEN,
};
