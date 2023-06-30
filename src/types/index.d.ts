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

export type FooterInfo = {
  _id: string;
  _createdAt: Date;
  address: text[];
  socialName: string[];
  socialLink: string[];
  contact: string[];
};

export type ServiceInfo = {
  title: string;
  _translations: Object[][];
  language: Lang;
  description: text;
  body: [{ _key: string; title: string; content: text }];
};

export type i18nLanguageType = {
  id: Lang;
  title: string;
  isDefault?: boolean | undefined;
};
