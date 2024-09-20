import React from 'react';
import { CourseSummary } from '@/types/course-summary.interface';

import { CourseCard, CourseCardProps } from './course-card';

type CourseCardListProps = {
    courses: CourseSummary[];
};

export const CourseCardList: React.FC<CourseCardListProps> = async ({ courses }) => {
    return (
        <div className='mt-10 flex flex-wrap justify-center gap-6 xl:justify-start'>
            {courses.map((course) => (
                <CourseCard key={`course-${course.slug}`} {...course} />
            ))}
        </div>
    );
};
