import { type Manga } from "@/shared/types";

export type CatalogItem = Pick<Manga, "id" | "type" | "name" | "slug" | "cover" | "rating">;
