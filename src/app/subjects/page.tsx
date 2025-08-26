import { CoursesTable } from "@/components/coursesTable";
import { getSyllabus } from "../../lib/syllabus";
import { CourseForTable } from "@/types/syllabus";

export default async function Page() {
	const syllabus = await getSyllabus();
	const courses: CourseForTable[] = syllabus.courses.map((course) => ({
		courseName: course.courseName,
		syllabusLink: course.syllabusLink,
		courseCode: course.courseCode,
		series: course.series,
		credits: String(course.credits),
		grade: String(course.grade),
		semester: course.semester,
		creditType: course.creditType,
	}));

	return (
		<>
			<h1 className="text-3xl font-bold mb-4">科目配当表から探す</h1>
			<CoursesTable courses={courses} />
		</>
	);
}
