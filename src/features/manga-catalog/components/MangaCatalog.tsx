import { MangaCatalogItem } from "./MangaCatalogItem";

import { type CatalogItem } from "../types/catalog-item";

interface MangaCatalogProps {
    items: CatalogItem[];
}

export function MangaCatalog({ items }: MangaCatalogProps) {
    if (!items.length) {
        return (
            <div className="flex justify-center pt-2 md:pt-10">
                <p className="text-text-secondary">Nothing found</p>
            </div>
        );
    }

    return (
        <div className="grid xxs:grid-cols-2 gap-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {items.map((item) => (
                <MangaCatalogItem key={item.id} item={item} />
            ))}
        </div>
    );
}
