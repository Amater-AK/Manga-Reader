import { useMangaSearch } from "@/features/manga-search";

import { MangaSearch } from "@/features/manga-search";
import { MangaCatalog } from "@/features/manga-catalog";

import { type CatalogItem } from "@/features/manga-catalog/types/catalog-item";
const DUMMY_CATALOG: CatalogItem[] = [
    {
        id: "01a144e3-6e84-72d5-b30a-d2a884395797",
        type: "Manga",
        name: "Black Jack ni Yoroshiku",
        slug: "black-jack-ni-yoroshiku",
        cover: {
            id: "d2cc243c-df1c-461b-b5d8-1e56de87a140",
            thumbnail: "/manga/black-jack-ni-yoroshiku/covers/03.jpg",
            default: "/manga/black-jack-ni-yoroshiku/covers/03.jpg",
            original: "/manga/black-jack-ni-yoroshiku/covers/03.jpg",
            color: "#D2C0A1",
        },
        rating: {
            average: 8.02,
            votes: 1778,
        },
    },
    {
        id: "01a144e7-a1de-726c-bc03-39cbc661cc2b",
        type: "Comics",
        name: "Pepper&Carrot",
        slug: "pepper-and-carrot",
        cover: {
            id: "54a659db-1d70-486b-ac23-9e83722664a6",
            thumbnail: "/manga/pepper-and-carrot/covers/c3.jpg",
            default: "/manga/pepper-and-carrot/covers/c3.jpg",
            original: "/manga/pepper-and-carrot/covers/c3.jpg",
            color: "#3B6973",
        },
        rating: {
            average: 8.2,
            votes: 0,
        },
    },
];

export function CatalogPage() {
    const { searchQuery, searchRegex, onChangeQuery } = useMangaSearch();

    const filteredCatalog = DUMMY_CATALOG.filter((manga) => searchRegex.test(manga.name));

    return (
        <>
            <h1 className="sr-only">Manga Catalog</h1>

            <section className="py-2 bg-bg-secondary border-b border-border-default">
                <div className="wrapper flex justify-between items-center gap-4">
                    <h2 className="sr-only">Catalog configuration</h2>

                    <MangaSearch onSubmit={onChangeQuery} />
                    <p>Filters</p>
                </div>
            </section>

            <section className="py-2">
                <div className="wrapper">
                    <h2 className="sr-only">Catalog</h2>

                    <MangaCatalog items={filteredCatalog} />
                </div>
            </section>
        </>
    );
}
