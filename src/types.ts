export interface Event {
  date?: string;
  content: string;
}

export interface TimelineYear {
  year: string;
  events: Event[];
}

export type TimelineData = TimelineYear[];