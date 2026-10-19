import { Outlet } from "react-router";

import { Header } from "@/shared/components/Header";

export function MainLayout() {
    return (
        <div className="flex flex-col min-h-svh">
            <Header />

            <main className="grow">
                <Outlet />
            </main>
        </div>
    );
}
