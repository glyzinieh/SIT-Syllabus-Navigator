import { Link } from "@/components/digital-go-jp";
import { getSyllabus } from "@/lib/syllabus";
import { notFound } from "next/navigation";

export async function generateMetadata({
	params,
}: {
	params: { courseCode: string };
}) {
	const { courseCode } = await params;

	const syllabus = await getSyllabus();
	const course = syllabus.courses.find(
		(course) => course.courseCode === courseCode
	);
	if (!course) {
		return {
			title: "科目が見つかりません",
			description: "指定された科目は存在しません。",
		};
	}

	return {
		title: course.courseName,
		description: `${course.courseName} の詳細情報`,
	};
}

export default async function Page({
	params,
}: {
	params: Promise<{ courseCode: string }>;
}) {
	const { courseCode } = await params;

	const syllabus = await getSyllabus();
	const course = syllabus.courses.find(
		(course) => course.courseCode === courseCode
	);
	if (!course) {
		notFound();
	}

	const classes = [];

	for (const year in course.classes) {
		for (const semester in course.classes[year]) {
			for (const classInfo in course.classes[year][semester]) {
				classes.push({
					year,
					semester,
					...course.classes[year][semester][classInfo],
				});
			}
		}
	}

	return (
		<>
			<div className="flex items-end gap-4 mb-4">
				<h1 className="text-3xl font-bold">{course.courseName}</h1>
				<Link href={course.syllabusLink} target="_blank">
					シラバスを表示
				</Link>
			</div>
			<table className="w-full text-std-16N-170 mb-4">
				<colgroup className="border-r border-black bg-solid-gray-100"></colgroup>
				<colgroup>
					<col className="border-r border-solid-gray-420" />
				</colgroup>
				<tbody>
					<tr className="hover:bg-blue-50">
						<th
							className="px-4 py-5 text-start align-top"
							scope="row"
						>
							科目名
						</th>
						<td className="px-4 py-5 align-top">
							{course.courseName}
						</td>
					</tr>
					<tr className="hover:bg-blue-50">
						<th
							className="px-4 py-5 text-start align-top"
							scope="row"
						>
							科目コード
						</th>
						<td className="px-4 py-5 align-top">
							{course.courseCode}
						</td>
					</tr>
					<tr className="hover:bg-blue-50">
						<th
							className="px-4 py-5 text-start align-top"
							scope="row"
						>
							系列
						</th>
						<td className="px-4 py-5 align-top">{course.series}</td>
					</tr>
					<tr className="hover:bg-blue-50">
						<th
							className="px-4 py-5 text-start align-top"
							scope="row"
						>
							単位数
						</th>
						<td className="px-4 py-5 align-top">
							{course.credits}
						</td>
					</tr>
					<tr className="hover:bg-blue-50">
						<th
							className="px-4 py-5 text-start align-top"
							scope="row"
						>
							配当学年
						</th>
						<td className="px-4 py-5 align-top">{course.grade}</td>
					</tr>
					<tr className="hover:bg-blue-50">
						<th
							className="px-4 py-5 text-start align-top"
							scope="row"
						>
							学期
						</th>
						<td className="px-4 py-5 align-top">
							{course.semester}
						</td>
					</tr>
					<tr className="hover:bg-blue-50">
						<th
							className="px-4 py-5 text-start align-top"
							scope="row"
						>
							単位区分
						</th>
						<td className="px-4 py-5 align-top">
							{course.creditType}
						</td>
					</tr>
					<tr className="hover:bg-blue-50">
						<th
							className="px-4 py-5 text-start align-top"
							scope="row"
						>
							講義区分
						</th>
						<td className="px-4 py-5 align-top">
							{course.category}
						</td>
					</tr>
				</tbody>
			</table>
			<h2 className="text-2xl font-bold mb-4">授業情報</h2>
			{classes.length > 0 ? (
				<table className="w-full text-std-16N-170 mb-4">
					<thead>
						<tr className="border-b border-black bg-solid-gray-100">
							<th
								className="px-4 py-5 text-start align-top"
								scope="col"
							>
								年度
							</th>
							<th
								className="px-4 py-5 text-start align-top"
								scope="col"
							>
								学期
							</th>
							<th
								className="px-4 py-5 text-start align-top"
								scope="col"
							>
								キャンパス
							</th>
							<th
								className="px-4 py-5 text-start align-top"
								scope="col"
							>
								講師名
							</th>
							<th
								className="px-4 py-5 text-start align-top"
								scope="col"
							>
								週コマ
							</th>
							<th
								className="px-4 py-5 text-start align-top"
								scope="col"
							>
								備考
							</th>
						</tr>
					</thead>
					<tbody>
						{classes.map((cls, index) => (
							<tr
								key={index}
								className="border-b border-solid-gray-500 even:bg-solid-gray-50 hover:bg-blue-50"
							>
								<td className="px-4 py-5 align-top">
									{cls.year}
								</td>
								<td className="px-4 py-5 align-top">
									{cls.semester}
								</td>
								<td className="px-4 py-5 align-top">
									{cls.campus}
								</td>
								<td className="px-4 py-5 align-top">
									{cls.instructor}
								</td>
								<td className="px-4 py-5 align-top">
									<ul>
										{cls.weeklySlots.map(
											(weekClass, weekIndex) => (
												<li key={weekIndex}>
													{weekClass.day} -{" "}
													{weekClass.period}
												</li>
											)
										)}
									</ul>
								</td>
								<td className="px-4 py-5 align-top">
									{cls.note}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>授業情報はありません。</p>
			)}
		</>
	);
}
