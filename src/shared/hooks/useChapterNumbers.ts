interface HookProps {
    volumeString: string | undefined;
    chapterString: string | undefined;
}

export function useChapterNumbers({ volumeString, chapterString }: HookProps) {
    const volumeMatch = volumeString?.match(/^v(\d+)$/);
    const chapterMatch = chapterString?.match(/^c(\d+(?:\.\d+)?)$/);

    if (!volumeMatch || !chapterMatch) {
        return { isValidNumbers: false, volumeNumber: 0, chapterNumber: 0 };
    }

    const volumeNumber = Number(volumeMatch[1]);
    const chapterNumber = Number(chapterMatch[1]);

    return { isValidNumbers: true, volumeNumber, chapterNumber };
}
