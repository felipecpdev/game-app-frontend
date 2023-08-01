export interface Page {
  content:       Game[];
  pageNo:        number;
  pageSize:      number;
  totalElements: number;
  totalPages:    number;
  last:          boolean;
}

export interface Game {
  id:          number;
  gameName:    string;
  developer:   string;
  description: string;
  engine:      null;
  gameArt:     null;
  active:      boolean;
  dateCreated: null;
  lastUpdate: null;
}
