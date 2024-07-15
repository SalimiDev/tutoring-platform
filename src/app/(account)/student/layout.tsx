import { ReactNode } from "react";

export default function StudentLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <aside className="bg-gray-300 w-80 flex justify-center items-center">student sidebar</aside>
            <main className="flex justify-center items-center flex-1">{children}</main>
        </>
    );
}
