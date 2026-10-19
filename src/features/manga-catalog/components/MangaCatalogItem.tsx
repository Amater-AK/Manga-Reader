import { Link } from "react-router";

import { BsStarFill } from "react-icons/bs";

import { Image } from "@/shared/components/ui/Image";

import { type CatalogItem } from "../types/catalog-item";

interface MangaCatalogItemProps {
    item: CatalogItem;
}

export function MangaCatalogItem({ item }: MangaCatalogItemProps) {
    const url = `/${item.slug}`;

    return (
        <article className="flex flex-col gap-1 bg-surface-base border border-border-default">
            <Link to={url}></Link>
            <Link to={url}></Link>
        </article>
    );
}
