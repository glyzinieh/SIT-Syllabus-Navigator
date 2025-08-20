"use client";

import { Course } from "@/types/syllabus";
import {
	ColumnFiltersState,
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import { useState } from "react";
import { Button, Input } from "./digital-go-jp";
import { SortIcon } from "./SortIcon";

declare module "@tanstack/react-table" {
	interface ColumnMeta<TData, TValue> {
		className?: string;
	}
}

interface CoursesTableProps {
	courses: Course[];
}

export function CoursesTable({ courses }: CoursesTableProps) {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

	const columnHelper = createColumnHelper<Course>();

	const columns = [
		columnHelper.accessor("courseName", {
			header: "科目名",
			meta: { className: "overflow-hidden truncate" },
		}),
		columnHelper.accessor("series", {
			header: "系列",
		}),
		columnHelper.accessor("creditType", {
			header: "区分",
		}),
		columnHelper.accessor("credits", {
			header: "単位数",
			filterFn: "equalsString",
		}),
		columnHelper.accessor("grade", {
			header: "学年",
			filterFn: "equalsString",
		}),
		columnHelper.accessor("semester", {
			header: "学期",
		}),
		columnHelper.accessor("courseCode", {
			header: "詳細",
			enableColumnFilter: false,
			enableSorting: false,
			cell: (info) => {
				const value = info.getValue();
				return (
					<Button asChild variant="outline" size="md">
						<Link href={`/courses/${value}`}>詳細</Link>
					</Button>
				);
			},
		}),
	];

	const table = useReactTable({
		data: courses,
		columns,
		state: {
			sorting,
			columnFilters,
		},
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
	});

	return (
		<div className="overflow-x-auto">
			<table className="table-fixed w-full max-w-[1024px] lg:max-w-full">
				<thead className="text-std-16N-170">
					{table.getHeaderGroups().map((headerGroup) => (
						<tr
							key={headerGroup.id}
							className="border-b border-black bg-solid-gray-100"
						>
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									scope="col"
									className={`px-4 py-5 text-start align-top select-none ${
										header.column.getCanSort()
											? "cursor-pointer"
											: ""
									} ${
										header.column.columnDef.meta?.className
									}`}
									onClick={header.column.getToggleSortingHandler()}
								>
									<div className="flex items-start justify-between">
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef
														.header,
													header.getContext()
											  )}
										{header.column.getCanSort() && (
											<span className="pt-0.5">
												<SortIcon
													sort={header.column.getIsSorted()}
												/>
											</span>
										)}
									</div>
									{header.column.getCanFilter() && (
										<div className="pt-4">
											<Input
												value={String(
													header.column.getFilterValue() ??
														""
												)}
												onChange={(e) =>
													header.column.setFilterValue(
														e.target.value
													)
												}
												placeholder={`"${flexRender(
													header.column.columnDef
														.header,
													header.getContext()
												)}" を検索`}
												onClick={(e) =>
													e.stopPropagation()
												}
											/>
										</div>
									)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr
							key={row.id}
							className="border-b border-solid-gray-500 even:bg-solid-gray-50 hover:bg-blue-50"
						>
							{row.getVisibleCells().map((cell) => (
								<td
									key={cell.id}
									className={`px-4 py-5 align-top ${cell.column.columnDef.meta?.className}`}
								>
									{flexRender(
										cell.column.columnDef.cell,
										cell.getContext()
									)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
