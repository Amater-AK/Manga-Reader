import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { createThemeSlice } from "@/shared/stores/themeSlice";

import { type AppStore } from "./types";

import { STORAGE_KEY } from "@/shared/config";

export const useStore = create<AppStore>()(
    persist(
        immer((...a) => ({
            ...createThemeSlice(...a),
        })),
        {
            name: STORAGE_KEY,
        },
    ),
);
