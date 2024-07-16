export default async function CourseDetails({ params }: { params: { slug: string } }) {
    const { slug } = params;
    return (
        <div className='flex items-center justify-center text-5xl'>
            <h1>{slug}</h1>
        </div>
    );
}
