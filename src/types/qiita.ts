export type QiitaTag = {
  name: string;
  versions: string[];
};

export type QiitaUser = {
  id: string;
  name: string;
  description: string;
  profile_image_url: string;
  organization: string | null;
  location: string | null;
  items_count: number;
  github_login_name: string | null;
  twitter_screen_name: string | null;
  website_url: string | null;
};

export type QiitaItem = {
  id: string;
  title: string;
  body: string;
  rendered_body: string;
  tags: QiitaTag[];
  created_at: string;
  updated_at: string;
  url: string;
  likes_count: number;
  comments_count: number;
  reactions_count: number;
  stocks_count: number;
  page_views_count: number | null;
  user: QiitaUser;
};
