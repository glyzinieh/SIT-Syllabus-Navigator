"use client";

import { CourseForTable } from "@/types/syllabus";
import {
	ColumnFiltersState,
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { InputFilter, SelectFilter } from ".";
import { Link } from "../digital-go-jp";
import { SortIcon } from "../icons";

interface CoursesTableProps {
	courses: CourseForTable[];
}

export function CoursesTable({ courses }: CoursesTableProps) {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

	const columnHelper = createColumnHelper<CourseForTable>();

	const columns = [
		columnHelper.accessor("courseName", {
			header: "科目名",
			meta: { className: "overflow-hidden truncate" },
			filterFn: "includesString",
			cell: (info) => (
				<Link href={`/subjects/${info.row.original.courseCode}`}>
					{info.getValue()}
				</Link>
			),
		}),
		columnHelper.accessor("series", {
			header: "系列",
			filterFn: "arrIncludesSome",
		}),
		columnHelper.accessor("creditType", {
			header: "区分",
			filterFn: "arrIncludesSome",
		}),
		columnHelper.accessor("credits", {
			header: "単位数",
			enableColumnFilter: false,
		}),
		columnHelper.accessor("grade", {
			header: "学年",
			filterFn: "arrIncludesSome",
		}),
		columnHelper.accessor("semester", {
			header: "学期",
			filterFn: "arrIncludesSome",
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
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
	});

	return (
		<div className="overflow-x-auto lg:overflow-x-visible">
			<table className="table-fixed w-full min-w-[1024px] lg:min-w-0 lg:max-w-full">
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
									className="px-4 py-5 text-start align-top select-none"
								>
									<div className="flex items-start justify-between">
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef
														.header,
													header.getContext()
											  )}
										<div className="flex items-start pt-0.5 gap-2">
											{header.column.getCanSort() && (
												<div
													onClick={header.column.getToggleSortingHandler()}
													className="cursor-pointer"
												>
													<SortIcon
														sort={header.column.getIsSorted()}
													/>
												</div>
											)}
											{header.column.getCanFilter() ? (
												header.column.columnDef
													.filterFn ===
												"arrIncludesSome" ? (
													<SelectFilter
														column={header.column}
													/>
												) : (
													<InputFilter
														column={header.column}
													/>
												)
											) : null}
										</div>
									</div>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr
							key={row.id}
							className="border-b border-solid-gray-500 even:bg-solid-gray-50 hover:bg-blue-50 cursor-pointer"
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
