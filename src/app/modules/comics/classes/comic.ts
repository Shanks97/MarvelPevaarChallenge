import { CharacterList } from "../../characters/classes/character-list";
import { Image } from "../../common-marvel/classes/image";
import { TextObject } from "../../common-marvel/classes/text-object";
import { Url } from "../../common-marvel/classes/url";
import { CreatorList } from "../../creators/classes/creator-list";
import { EventList } from "../../events/classes/event-list";
import { SeriesSummary } from "../../series/classes/series-summary";
import { StoryList } from "../../stories/classes/story-list";
import { ComicDate } from "./comic-date";
import { ComicPrice } from "./comic-price";
import { ComicSummary } from "./comic-summary";

export class Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: SeriesSummary;
  variants: ComicSummary[];
  collections: ComicSummary[];
  collectedIssues: ComicSummary[];
  dates: ComicDate[];
  prices: ComicPrice[];
  thumbnail: Image;
  images: Image[];
  creators: CreatorList;
  characters: CharacterList;
  stories: StoryList;
  events: EventList;

 
}