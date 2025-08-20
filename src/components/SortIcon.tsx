import type { SortDirection } from "@tanstack/react-table";

export function SortIcon({ sort }: { sort: SortDirection | false }) {
	if (sort) {
		return (
			<svg
				className={sort === "desc" ? "rotate-180" : ""}
				width="24"
				height="24"
				fill="black"
				aria-hidden={true}
			>
				<path d="M17 18.12L21.27 14L22 14.7L16.5 20L11 14.7L11.73 14L16 18.12V4H17V18.12Z" />
				<path d="M14 8.92L11.73 11L9 8.52V20H6V8.52L3.27 11L1 8.93L7.5 3L14 8.93Z" />
			</svg>
		);
	} else {
		return (
			<svg width="24" height="24" fill="black" aria-hidden="true">
				<path d="M17 18.11L21.27 14L22 14.7L16.5 20L11 14.7L11.73 14L16 18.12V4H17V18.12Z" />
				<path d="M8 5.88L12.27 10L13 9.3L7.5 4L2 9.3L2.73 10L7 5.88V20H8V5.88Z" />
			</svg>
		);
	}
}
