import en from "./en";
import zh from "./zh";

export const defaultLocale = "en";
export const locales = { en, zh };
export const languages = [
  { code: "en", labelKey: "language.en" },
  { code: "zh", labelKey: "language.zh" },
] as const;

export type Locale = keyof typeof locales;
export type TranslationKey = string;

export function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "zh";
}

export function getValue(locale: Locale, key: TranslationKey) {
  const parts = key.split(".");
  let value: unknown = locales[locale];

  for (const part of parts) {
    if (value && typeof value === "object" && part in value) {
      value = (value as Record<string, unknown>)[part];
    } else {
      return key;
    }
  }

  return typeof value === "string" ? value : key;
}

export function getInitialLocale() {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  const savedLocale = window.localStorage.getItem("starlinworld-locale");
  if (isLocale(savedLocale)) {
    return savedLocale;
  }

  const browserLocale = window.navigator.language.toLowerCase();
  return browserLocale.startsWith("zh") ? "zh" : defaultLocale;
}

export function translatePage(locale: Locale) {
  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;

    element.textContent = getValue(locale, key);
  });

  document
    .querySelectorAll<HTMLElement>("[data-i18n-title]")
    .forEach((element) => {
      const key = element.dataset.i18nTitle;
      if (key) element.setAttribute("title", getValue(locale, key));
    });

  document
    .querySelectorAll<HTMLElement>("[data-i18n-aria-label]")
    .forEach((element) => {
      const key = element.dataset.i18nAriaLabel;
      if (key) element.setAttribute("aria-label", getValue(locale, key));
    });

  document
    .querySelectorAll<HTMLImageElement>("[data-i18n-alt-prefix][data-i18n-alt-suffix]")
    .forEach((image) => {
      const prefixKey = image.dataset.i18nAltPrefix;
      const suffixKey = image.dataset.i18nAltSuffix;
      if (!prefixKey || !suffixKey) return;

      image.alt = `${getValue(locale, prefixKey)}${getValue(locale, suffixKey)}`;
    });

  document.querySelectorAll<HTMLImageElement>("[data-i18n-logo]").forEach((image) => {
    image.src = getValue(locale, "brand.logo");
  });

  const titleKey = document.body.dataset.i18nDocumentTitle;
  if (titleKey) {
    const title = getValue(locale, titleKey);
    const page = document.body.dataset.i18nPage;
    document.title = page ? title.replace("{page}", page) : title;
  }
}