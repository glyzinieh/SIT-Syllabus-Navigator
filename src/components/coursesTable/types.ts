import type { Column } from "@tanstack/react-table";

declare module "@tanstack/react-table" {
	interface ColumnMeta<TData, TValue> {
		className?: string;
	}
}

export type FilterProps<T> = {
	column: Column<T, unknown>;
};
