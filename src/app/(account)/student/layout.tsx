import { ReactNode } from 'react';

export default function StudentLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <aside className='bg-gray-300 flex w-80 items-center justify-center'>
                student sidebar
            </aside>
            <main className='flex flex-1 items-center justify-center'>{children}</main>
        </>
    );
}
