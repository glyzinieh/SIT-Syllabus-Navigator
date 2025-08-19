"use client";

import { Button, Label, Select } from "@/components/digital-go-jp";
import type { SyllabusIndex } from "@/types";
import { useState } from "react";
import { handleFormSubmit } from "../handleFormSubmit";

export function SelectForm(props: {
  syllabusIndex: SyllabusIndex;
  defaultValues?: {
    admissionYear: number | null;
    departmentCode: string | null;
  };
}) {
  const { syllabusIndex, defaultValues } = props;

  const [selectedYear, setSelectedYear] = useState<number | null>(
    defaultValues?.admissionYear || null
  );
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    defaultValues?.departmentCode || null
  );

  const years = Array.from(
    new Set(syllabusIndex.map((item) => item.admissionYear))
  );

  return (
    <form action={handleFormSubmit}>
      <div className="mb-4">
        <Label htmlFor="admissionYear">入学年度</Label>
        <Select
          name="admissionYear"
          value={selectedYear || ""}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          <option value="" disabled>
            入学年度を選択してください
          </option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </div>
      {selectedYear ? (
        <>
          <div className="mb-4">
            <Label htmlFor="departmentCode">学部・学科</Label>
            <Select
              name="departmentCode"
              value={selectedDepartment || ""}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="" disabled>
                学部・学科を選択してください
              </option>
              {syllabusIndex
                .filter((item) => item.admissionYear === selectedYear)
                .map((item) => (
                  <option key={item.departmentCode} value={item.departmentCode}>
                    {item.department}
                  </option>
                ))}
            </Select>
          </div>
          <div className="mb-4">
            <Button type="submit" size="lg" variant="solid-fill">
              選択する
            </Button>
          </div>
        </>
      ) : null}
    </form>
  );
}
