export interface Event {
  date?: string;
  content: string;
}

export interface TimelineYear {
  year: string;
  events: Event[];
}

export type TimelineData = TimelineYear[];

export interface Chapter {
  title: string;
  page: number;
  id: string;
}

export interface Book {
  title: string;
  englishTitle?: string;
  chapters: Chapter[];
}

export interface ChapterPageData {
  prologue?: { title: string; content: string; page: number; id: string };
  [key: string]: { title: string; englishTitle?: string; chapters?: Chapter[]; content?: string; page?: number; id?: string } | undefined;
}

export interface NovelConcept {
  term: string;
  pages: string[];
  term_en: string;
}

export interface RevelationNovelConceptsData {
  [category: string]: NovelConcept[];
}