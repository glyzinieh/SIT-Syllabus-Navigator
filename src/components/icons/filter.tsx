export function FilterIcon({ filter }: { filter?: boolean }) {
	if (filter) {
		// active: slightly thicker bars
		return (
			<svg width="24" height="24" fill="black" aria-hidden={true}>
				<rect x="3" y="5.5" width="18" height="3" rx="1" />
				<rect x="5" y="10.5" width="14" height="3" rx="1" />
				<rect x="7" y="15.5" width="10" height="3" rx="1" />
			</svg>
		);
	} else {
		// inactive: thinner bars
		return (
			<svg width="24" height="24" fill="black" aria-hidden={true}>
				<rect x="3" y="6" width="18" height="1" rx="1" />
				<rect x="5" y="11" width="14" height="1" rx="1" />
				<rect x="7" y="16" width="10" height="1" rx="1" />
			</svg>
		);
	}
}
