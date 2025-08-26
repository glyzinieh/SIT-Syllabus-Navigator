import Link from "next/link";
import { Button } from "@/components/digital-go-jp";

export function MenuButton({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Button asChild variant="solid-fill" size="lg">
			<Link
				href={href}
				className="inline-flex items-center justify-center"
			>
				{children}
			</Link>
		</Button>
	);
}
