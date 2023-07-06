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
  keywords: string[];
  icons: { icon: string };
  links: {
    linkedIn: string;
    facebook: string;
  };
};

export type LanguageConstringType = {
  lang: Lang;
  changeLang: (arg: Lang) => void;
};

export type Lang = "en" | "hi" | "gu";

export type Page = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: string[];
};

export type WhyChooseUsInfo = {
  _id: string;
  _createdAt: Date;
  title: string;
  description: string;
  image: string;
};

export type FooterInfo = {
  _id: string;
  _createdAt: Date;
  address: string[];
  socialName: string[];
  socialLink: string[];
  contact: string[];
};

export type Info = {
  title: string;
  _translations: Object[][];
  language: Lang;
  description: string;
  image: string;
  body: [{ _key: string; title: string; content: string }];
};

export type ContactInfo = {
  title: string;
  _translations: Object[][];
  language: Lang;
  description: string;
  image: string;
  body: { _key: string; text: string }[];
};

export type HeroSectionInfo = {
  title: string;
  image: string;
  description: string;
};

export type ClientList = {
  _id: string;
  name: string;
  image: string;
};

export type i18nLanguageType = {
  id: Lang;
  title: string;
  isDefault?: boolean | undefined;
};

type EmailForm = {
  name?: string;
  subject: string;
  message: string;
};
