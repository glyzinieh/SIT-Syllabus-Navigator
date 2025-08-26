"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button, Checkbox, Divider } from "../digital-go-jp";
import { FilterIcon } from "../icons";
import type { FilterProps } from "./types";

export function SelectFilter<T>({ column }: FilterProps<T>) {
	const [isOpen, setIsOpen] = useState(false);

	const facetedValues = useMemo(
		() => Array.from(column.getFacetedUniqueValues().keys()).sort(),
		[column.getFacetedUniqueValues]
	);

	const columnFilterValue =
		(column.getFilterValue() as (string | number)[]) ?? [];

	function handleCheckboxChange(value: string | number) {
		const newFilter: (string | number)[] = [...columnFilterValue];
		const index = newFilter.indexOf(value);

		if (index === -1) {
			newFilter.push(value);
		} else {
			newFilter.splice(index, 1);
		}

		column.setFilterValue(newFilter.length > 0 ? newFilter : undefined);
	}

	function handleClearFilter() {
		column.setFilterValue(undefined);
		setIsOpen(false);
	}

	function handleSelectAll() {
		column.setFilterValue(facetedValues);
	}

	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				isOpen &&
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen]);

	return (
		<div ref={containerRef} className="relative inline-block">
			<div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
				<FilterIcon filter={column.getIsFiltered()} />
			</div>
			{isOpen && (
				<div className="absolute bg-white shadow-lg p-4 max-h-75 overflow-y-auto w-100">
					<div className="flex gap-2">
						<Button
							onClick={handleClearFilter}
							variant="outline"
							size="sm"
						>
							クリアする
						</Button>
						<Button
							onClick={handleSelectAll}
							variant="outline"
							size="sm"
						>
							全て選択する
						</Button>
						<Button
							onClick={() => setIsOpen(false)}
							variant="outline"
							size="sm"
						>
							閉じる
						</Button>
					</div>
					<Divider className="my-3 border-t-1" color="black" />
					{facetedValues.map((value) => (
						<Checkbox
							key={value}
							onChange={() => handleCheckboxChange(value)}
							checked={columnFilterValue.includes(value)}
						>
							<span className="block truncate max-w-75">
								{value}
							</span>
						</Checkbox>
					))}
				</div>
			)}
		</div>
	);
}
