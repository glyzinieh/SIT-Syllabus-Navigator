import { cookies } from "next/headers";
import { SelectForm } from "./_components/select";
import { Link } from "@/components/digital-go-jp";

export const metadata = {
	title: "シラバスを選択する",
	description: "芝浦工業大学の履修登録をサポートするツール",
};

export default async function Page() {
	const response = await fetch(
		"https://glyzinieh.github.io/SIT-Syllabus-Data/index.json"
	);
	if (!response.ok) {
		throw new Error("Failed to fetch syllabus");
	}
	const syllabusIndex = await response.json();

	const cookieStore = await cookies();
	const admissionYear = cookieStore.get("admissionYear");
	const departmentCode = cookieStore.get("departmentCode");

	return (
		<>
			<div className="flex items-end gap-4 mb-4">
				<h1 className="text-3xl font-bold">シラバスを選択する</h1>
				<Link
					href="https://github.com/glyzinieh/SIT-Syllabus-Data/blob/main/%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B.md"
					target="_blank"
				>
					データを追加する
				</Link>
			</div>
			<SelectForm
				syllabusIndex={syllabusIndex}
				defaultValues={{
					admissionYear: admissionYear
						? Number(admissionYear.value)
						: null,
					departmentCode: departmentCode
						? departmentCode.value
						: null,
				}}
			/>
		</>
	);
}
