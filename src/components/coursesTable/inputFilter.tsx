"use client";

import { useEffect, useRef, useState } from "react";
import { Button, Divider, Input } from "../digital-go-jp";
import { FilterIcon } from "../icons";
import { FilterProps } from "./types";

export function InputFilter<T>({ column }: FilterProps<T>) {
	const [isOpen, setIsOpen] = useState(false);

	function handleClearFilter() {
		column.setFilterValue(undefined);
		setIsOpen(false);
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
							onClick={() => setIsOpen(false)}
							variant="outline"
							size="sm"
						>
							閉じる
						</Button>
					</div>
					<Divider className="my-3 border-t-1" color="black" />
					<Input
						value={(column.getFilterValue() as string) ?? ""}
						onChange={(e) => column.setFilterValue(e.target.value)}
					/>
				</div>
			)}
		</div>
	);
}
