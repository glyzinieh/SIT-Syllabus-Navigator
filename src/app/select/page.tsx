import { cookies } from "next/headers";
import { SelectForm } from "./_components/select";

export default async function Page() {
  const syllabusIndex = await fetch(
    "https://glyzinieh.github.io/SIT-Syllabus-Data/index.json"
  ).then((res) => res.json());

  const cookieStore = await cookies();
  const admissionYear = cookieStore.get("admissionYear");
  const departmentCode = cookieStore.get("departmentCode");

  return (
    <SelectForm
      syllabusIndex={syllabusIndex}
      defaultValues={{
        admissionYear: admissionYear ? Number(admissionYear.value) : null,
        departmentCode: departmentCode ? departmentCode.value : null,
      }}
    />
  );
}
