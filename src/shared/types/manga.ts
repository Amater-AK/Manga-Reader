import { type MangaCover } from "./manga-cover";
import { type Rating } from "./rating";

export interface Manga {
    id: string;
    type: string;
    format: string[];
    name: string;
    otherNames: string[];
    slug: string;
    releaseDate: number;
    volumes: number;
    chapters: number;
    status: string;
    authors: string[];
    artists: string[];
    publisher: string[];
    cover: MangaCover;
    genres: string[];
    tags: string[];
    rating: Rating;
    summary: string;
}
