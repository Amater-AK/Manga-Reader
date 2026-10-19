import { Link } from "react-router";

export function Logo() {
    return (
        <Link to="/" className="flex items-center gap-2">
            <div className="px-2 py-1 text-white bg-(image:--gradient-brand) rounded-sm">漫画</div>
            <span className="font-semibold text-base md:text-xl">Reader</span>
        </Link>
    );
}
