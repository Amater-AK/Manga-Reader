import { useParams, Navigate } from "react-router";

import { useChapterNumbers } from "@/shared/hooks/useChapterNumbers";

export function ReaderPage() {
    const { mangaName, volumeString, chapterString } = useParams();
    const { isValidNumbers, volumeNumber, chapterNumber } = useChapterNumbers({ volumeString, chapterString });

    if (!isValidNumbers) return <Navigate to="/404" replace />;

    return (
        <>
            <h1>Reader Page</h1>
            <p>Manga: {mangaName}</p>
            <p>Volume: {volumeNumber}</p>
            <p>Chapter: {chapterNumber}</p>
        </>
    );
}
