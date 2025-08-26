export interface WeeklySlot {
	day: string;
	period: number;
}

export interface ClassInfo {
	instructor: string;
	campus: string;
	note: string;
	weeklySlots: WeeklySlot[];
}

export type Classes = {
	[year: string]: { [semester: string]: ClassInfo[] };
};

export interface Course {
	courseName: string;
	syllabusLink: string;
	courseCode: string;
	series: string;
	credits: number;
	grade: number;
	semester: string;
	creditType: string;
	category: string;
	classes?: Classes;
}

export interface CourseForTable {
	courseName: string;
	syllabusLink: string;
	courseCode: string;
	series: string;
	credits: string;
	grade: string;
	semester: string;
	creditType: string;
}

export interface SeriesCredit {
	seriesName: string;
	credits: number;
}

export interface RequirementCourse {
	courseCode: string;
}

export interface Requirement {
	requirementName: string;
	totalCredits?: number;
	seriesCredits?: SeriesCredit[];
	courses?: RequirementCourse[];
}

export interface Timetable {
	year: string;
	semester: string;
}

export interface Syllabus {
	department: string;
	admissionYear: number;
	timetables?: Timetable[];
	courses: Course[];
	requirements: Requirement[];
}
