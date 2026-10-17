import { MainLayout } from "@/layouts/MainLayout";

import { NotFoundPage } from "@/pages/NotFoundPage";
import { CatalogPage } from "@/pages/CatalogPage";
import { MangaDetailsPage } from "@/pages/MangaDetailsPage";
import { ReaderPage } from "@/pages/ReaderPage";

export const routes = [
    {
        Component: MainLayout,
        children: [
            {
                path: "/",
                Component: CatalogPage,
            },
            {
                path: "/manga/:mangaName",
                Component: MangaDetailsPage,
            },
        ],
    },
    {
        path: "/:mangaName/read/:volumeString/:chapterString",
        Component: ReaderPage,
    },

    {
        path: "*",
        Component: NotFoundPage,
    },
];
