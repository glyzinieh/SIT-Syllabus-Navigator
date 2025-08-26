"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleFormSubmit(formData: FormData) {
  const admissionYear = formData.get("admissionYear");
  const departmentCode = formData.get("departmentCode");

  const cookieStore = await cookies();
  cookieStore.set("admissionYear", String(admissionYear), {
    maxAge: 60 * 60 * 24 * 365,
  });
  cookieStore.set("departmentCode", String(departmentCode), {
    maxAge: 60 * 60 * 24 * 365,
  });

  redirect("/");
}
