export type LanguageData = {
  title: string;
  prompt: string;
  description?: string;
  remark: string;
};

export type User = {
  zh?: LanguageData;
  en?: LanguageData;
  ja?: LanguageData;
  ko?: LanguageData;
  website: string | null;
  tags: TagType[];
  id: number;
  weight: number;
};

export type TagType =
  | "favorite"
  | "write"
  | "article"
  | "code"
  | "ai"
  | "living"
  | "interesting"
  | "life"
  | "social"
  | "philosophy"
  | "mind"
  | "pedagogy"
  | "academic"
  | "games"
  | "tool"
  | "interpreter"
  | "language"
  | "speech"
  | "comments"
  | "text"
  | "company"
  | "seo"
  | "doctor"
  | "finance"
  | "music"
  | "professional"
  | "contribute";

export type Tag = {
  label: string;
  description: string;
  color: string;
};
