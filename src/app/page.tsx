import { HomeHeroSection } from './_components/home-hero-section/home-hero-section';
import { CourseSummary } from '@/types/course-summary.interface';
import { CourseCardList } from './(courses)/_components/course-card-list';
import { homeFeatures } from '@/data/home-features';
import Feature from './_components/feature/feature';

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
        </>
    );
}
