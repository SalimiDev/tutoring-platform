import { HomeHeroSection } from './_components/home-hero-section/home-hero-section';
import { CourseSummary } from '@/types/course-summary.interface';
import { CourseCardList } from './(courses)/_components/course-card-list';
import { homeFeatures } from '@/data/home-features';
import Feature from './_components/feature/feature';
import { Button } from './_components/button/button';
import { IconArrowLeftFill } from './_components/icons/icons';

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
    const res = await fetch(`https://api.classbon.com/api/courses/newest/${count}`, {
        next: { revalidate: 24 * 60 * 60 },
    });
    return res.json();
}
export default async function Home() {
    const newestCourses = await getNewestCourses(4);
    return (
        <>
            <HomeHeroSection />
            <section className='mt-10 dark:bg-base-75'>
                <div className='container flex flex-col gap-10 py-10 lg:flex-row xl:gap-5'>
                    {homeFeatures.map((feature) => (
                        <Feature key={`feature-${feature.title}`} feature={feature} />
                    ))}
                </div>
            </section>
            <section className='container pt-20'>
                <div className='text-center xl:text-right'>
                    <h2 className='text-2xl font-extrabold'>تازه ترین دوره های آموزشی</h2>
                    <p className='mt-3 text-lg'>
                        برای به‌روز موندن، یاد گرفتن نکته‌های تازه ضروری‌ه!
                    </p>
                </div>
                <CourseCardList courses={newestCourses} />
            </section>
            <section className='my-40 px-2'>
                {/* <div className="sticky top-0 pt-0 text-center"> */}
                <div className='relative pt-0 text-center'>
                    <div className='pointer-events-none absolute -top-96 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full bg-primary opacity-10 blur-3xl'></div>

                    <h2
                        lang='en'
                        className='gradient relative z-10 mx-auto inline-block text-[clamp(2rem,6vw,5.5rem)] font-black leading-[1.3]'
                    >
                        ReactJs & Next.js
                    </h2>
                    <p className='relative z-[2] m-auto max-w-5xl py-4 font-light !leading-[1.7] text-base-content/70 md:text-3xl'>
                        ری‌اکت و نکست‌جی‌اس برترین کتابخونه‌های فرانت‌اند و یکه‌تاز دنیای وب!
                        پیشرفته‌ترین مباحث رو اینجا می تونی پیدا کنی. پس همین الان یادگیری رو شروع
                        کن ما هم از ابتدای مسیر با آموزش‌های تخصصی و کاملاً کاربردی کنارت هستیم.
                    </p>
                    <div className='flex flex-col items-center justify-center gap-3 lg:flex-row'>
                        <Button variant='primary' size='large' className='mt-7' animatedIcon={true}>
                            دوره‌های ری اکت و نکست‌ جی‌اس
                            <IconArrowLeftFill fill='currentColor' />
                        </Button>
                        <Button variant='neutral' size='large' className='mt-7' animatedIcon={true}>
                            مقالات ری اکت و نکست‌ جی‌اس
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
