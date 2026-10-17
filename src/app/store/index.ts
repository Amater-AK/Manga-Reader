import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { createThemeSlice } from "@/shared/stores/themeSlice";

import { type AppStore } from "./types";

export const useStore = create<AppStore>()(
    persist(
        immer((...a) => ({
            ...createThemeSlice(...a),
        })),
        {
            name: "app-storage",
        },
    ),
);
