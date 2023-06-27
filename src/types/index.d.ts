export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    linkedIn: string;
    facebook: string;
  };
};

export type LanguageContextType = {
  lang: Lang;
  changeLang: (arg: Lang) => void;
};

export type Lang = "en" | "hi" | "gu";

export type Page = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: text[];
};
