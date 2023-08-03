export interface Page {
  content: any[];
  pageNo: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export interface GameDTO {
  id?: number;
  gameName?: string;
  developer?: string;
  description?: string;
  engine?: string;
  gameArt?: string;
  active?: boolean;
  dateCreated?: Date;
  lastUpdated?: Date;
  gameLanguageDTOList?: GameLanguageDTOList[];
  gameGenreDTOList?: GameGenreDTOList[];
  gameModeDTOList?: GameModeDTOList[];
  gamePublisherDTOList?: GamePublisherDTOList[];
  publisherPlatformDTOList?: PublisherPlatformDTOList[];
}

export interface GameGenreDTOList {
  id?: number;
  gameDTO?: null;
  genreDTO?: GenreDTO;
}

export interface GenreDTO {
  id?: number;
  genreName?: string;
}

export interface GameLanguageDTOList {
  id?: number;
  gameDTO?: null;
  languageDTO?: LanguageDTO;
}

export interface LanguageDTO {
  id?: number;
  languageName?: string;
}

export interface GameModeDTOList {
  id?: number;
  gameDTO?: null;
  modeDTO?: ModeDTO;
}

export interface ModeDTO {
  id?: number;
  modeName?: string;
}

export interface GamePublisherDTOList {
  id?: number;
  gameDTO?: null;
  publisherDTO?: PublisherDTO;
}

export interface PublisherDTO {
  id?: number;
  publisherName?: string;
}

export interface PublisherPlatformDTOList {
  id?: number;
  publisherDTO?: PublisherDTO;
  platformDTO?: PlatformDTO;
  releaseDate?: Date;
}

export interface PlatformDTO {
  id?: number;
  platformName?: string;
}
