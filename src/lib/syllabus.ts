import type { Syllabus, SyllabusIndex } from "@/types";
import { cookies } from "next/headers";

export async function getSyllabus(
	admissionYear?: number,
	departmentCode?: string
): Promise<Syllabus> {
	if (!admissionYear || !departmentCode) {
		const cookieStore = await cookies();
		admissionYear = Number(cookieStore.get("admissionYear")?.value);
		departmentCode = cookieStore.get("departmentCode")?.value;
	}

	const syllabusIndexRes = await fetch(
		"https://glyzinieh.github.io/SIT-Syllabus-Data/index.json"
	);
	if (!syllabusIndexRes.ok) {
		throw new Error("Failed to fetch syllabus");
	}
	const syllabusIndex: SyllabusIndex = await syllabusIndexRes.json();

	const course = syllabusIndex.find(
		(course) =>
			course.admissionYear === admissionYear &&
			course.departmentCode === departmentCode
	);
	if (!course) {
		throw new Error("Course not found");
	}
	const syllabusPath = `https://glyzinieh.github.io/SIT-Syllabus-Data/${course.path}`;

	const syllabusRes = await fetch(syllabusPath);
	if (!syllabusRes.ok) {
		throw new Error("Failed to fetch syllabus");
	}

	return syllabusRes.json();
}
