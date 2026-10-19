import { type CatalogItemCover } from "./catalog-item-cover";

export interface CatalogItem {
    id: string;
    type: string;
    name: string;
    slug: string;
    cover: CatalogItemCover;
}
