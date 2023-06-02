import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "utils/Loader/Loader";

export function Layout() {

    const isLoading = false; // add state from redux

    return (
        <div>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            {isLoading && <Loader />}
        </div>
    )
};