import { Lang, i18nLanguageType } from "@/types";

const languages: i18nLanguageType[] = [
  { id: "en", title: "English", isDefault: true },
  { id: "hi", title: "हिंदी" },
  { id: "gu", title: "ગુજરાતી" },
];

export const i18n = {
  languages,
  base: languages.find((item) => item.isDefault)!.id,
};

export const googleTranslateLanguages = languages.map(({ id, title }) => ({
  id,
  title,
}));
