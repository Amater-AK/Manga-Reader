import { createBrowserRouter, RouterProvider } from "react-router";

import { ThemeProvider } from "./providers/ThemeProvider";

import { routes } from "./routes";

const router = createBrowserRouter(routes, {
    basename: import.meta.env.BASE_URL,
});

export function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}
