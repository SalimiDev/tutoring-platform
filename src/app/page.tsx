import { Colors } from '@/app/_components/colors';
import Image from 'next/image';
export default function Home() {
    return (
        <>
            <section className='mt-5 bg-hero-pattern bg-center bg-no-repeat xl:mt-20 xl:bg-left'>
                <div className='container flex flex-col-reverse items-center xl:flex-row'>
                    <div className='mt-12 flex flex-1 flex-col gap-5 pb-5 text-center xl:text-right'>
                        <h3 className='text-xl dark:text-info xl:text-2xl'>خوش اومدی به ...</h3>
                        <h1 className='gradient text-3xl font-black lg:text-5xl xl:text-5xl'>
                            مسیر صعود به قله‌های برنامه‌نویسی
                        </h1>
                        <p className='max-w-2xl text-lg font-bold leading-8 md:text-xl'>
                            هر جای مسیرِ برنامه‌نویسی که باشی، با هم‌راهی استادهای باتجربهٔ کلاسبن
                            می‌تونی بدون محدودیت به قله‌های بالاتر صعود کنی. ما همیشه هواتو داریم.
                        </p>
                        <Image
                            src='/images/frameworks.png'
                            className='m-auto mt-4 opacity-70 grayscale xl:m-0'
                            width={412}
                            height={39}
                            alt='frameworks'
                        />
                    </div>
                    <Image src='/images/programmer-landing.svg' alt='' width={702} height={521} />
                </div>
            </section>
        </>
    );
}
