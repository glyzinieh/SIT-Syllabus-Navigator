import { getSyllabus } from "../../lib/syllabus";
import { CoursesTable } from "@/components/coursesTable";

export default async function Page() {
	const syllabus = await getSyllabus();

	return (
		<>
			<h1 className="text-3xl font-bold mb-4">科目配当表から探す</h1>
			<CoursesTable courses={syllabus.courses} />
		</>
	);
}
