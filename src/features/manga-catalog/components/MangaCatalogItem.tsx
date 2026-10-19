import { Link } from "react-router";

import { BsStarFill } from "react-icons/bs";

import { Image } from "@/shared/components/ui/Image";

import { type CatalogItem } from "../types/catalog-item";

interface MangaCatalogItemProps {
    item: CatalogItem;
}

export function MangaCatalogItem({ item }: MangaCatalogItemProps) {
    const url = `/manga/${item.slug}`;

    return (
        <article className="flex flex-col gap-1 p-1 bg-surface-base border border-border-default rounded-sm transition-colors duration-300 hover:border-border-hover active:border-border-hover">
            <Link to={url}>
                <Image
                    ratio={1.4}
                    color={item.cover.color}
                    src={item.cover.default}
                    alt={`Cover for manga ${item.name}`}
                />
            </Link>
            <Link to={url} className="grow flex flex-col justify-between">
                <h3 className="multi-line-truncate">{item.name}</h3>
                <p className="flex justify-between items-center gap-2 text-sm">
                    <span className="text-text-tertiary">{item.type}</span>
                    <span className="flex items-center gap-1 text-rating-star">
                        <BsStarFill />
                        {item.rating.average}
                    </span>
                </p>
            </Link>
        </article>
    );
}
