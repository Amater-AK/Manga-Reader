import { type StateCreator } from "zustand";

import { type ThemeSlice } from "@/shared/stores/themeSlice";

export type AppStore = ThemeSlice;

export type AppSliceCreator<TSlice> = StateCreator<
    AppStore,
    [["zustand/persist", unknown], ["zustand/immer", never]],
    [],
    TSlice
>;
