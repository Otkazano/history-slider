export enum DataKey {
  History = 'История',
  Technology = 'Технологии',
  Sports = 'Спорт',
  Culture = 'Культура',
  Economy = 'Экономика',
  Ecology = 'Экология',
}

export interface Event {
  year: number;
  fact: string;
}

export interface Years {
  start: number;
  end: number;
}

export interface MockDataInit {
  title: string;
  years: Years;
  events: Event[];
}
