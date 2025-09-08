import React from "react";

export default function Loading() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-white">
			<div role="status" className="flex flex-col items-center gap-3">
				<svg
					className="w-12 h-12 text-sky-600 animate-spin"
					viewBox="0 0 50 50"
					aria-hidden="true"
				>
					<circle
						cx="25"
						cy="25"
						r="20"
						fill="none"
						stroke="currentColor"
						strokeWidth="5"
						strokeOpacity="0.25"
					/>
					<path
						fill="currentColor"
						d="M25 5a20 20 0 0 1 20 20"
						className="origin-center"
					/>
				</svg>

				<p className="text-sm text-gray-600">読み込み中…</p>
			</div>
		</div>
	);
}
