// Languages of the editor: its own texts with those of the drawing and the card it shows. A new language adds its
// files here.
import type { Dictionary } from "./index";
import plCard from "./pl/card";
import plEditor from "./pl/editor";

export const EDITOR_LANGUAGES: Record<string, Dictionary> = { en: {}, pl: { ...plCard, ...plEditor } };
