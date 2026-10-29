// Translations of the editor, the card and the guide. English is written in the code; a language maps those
// English texts to its own, with {name} for values put in. A text a language does not have shows in English.

export type Dictionary = Record<string, string>;

let current: Dictionary = {};
let language = "en";

export function useDictionary(dictionary: Dictionary, code = "en"): void {
  current = dictionary;
  language = code;
}

/** Code of the language in use, for content written whole in each language, such as the guide. */
export function currentLanguage(): string {
  return language;
}

/** Marks an English text kept in a constant as one to translate; t() translates it where it is shown. */
export function N_(text: string): string {
  return text;
}

/** The text in the language in use, with {name} replaced by the given values. */
export function t(text: string, values?: Record<string, string | number>): string {
  const out = current[text] || text;
  return values ? out.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match)) : out;
}

/** Languages FloorCast speaks, by code, with their own names. */
export const LANGUAGE_NAMES: Record<string, string> = {
  en: "English",
  pl: "Polski",
};

/**
 * The language to show: the plan's choice, otherwise the language of the user in Home Assistant, by its base
 * (pl from pl-PL); English when FloorCast does not speak it.
 */
export function pickLanguage(choice: string | undefined, hassLanguage: string | undefined, available: string[]): string {
  const wanted = choice && choice !== "auto" ? choice : (hassLanguage ?? "en");
  if (available.includes(wanted)) return wanted;
  const base = wanted.split("-")[0];
  return available.includes(base) ? base : "en";
}
