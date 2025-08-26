import Link from "next/link";

export function DrawerLink({
	href,
	level,
	drawerRef,
	children,
}: {
	href: string;
	level: number;
	drawerRef: React.RefObject<HTMLDialogElement | null>;
	children: React.ReactNode;
}) {
	let className = "";
	switch (level) {
		case 1:
			className = "text-xl";
			break;
		case 2:
			className = "text-lg ml-4";
			break;
	}

	return (
		<div
			className={`${className} p-2 hover:bg-solid-gray-50 hover:underline rounded-lg`}
		>
			<Link href={href} onClick={() => drawerRef.current?.close()}>
				{children}
			</Link>
		</div>
	);
}
