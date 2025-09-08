import { Button } from "@/components/digital-go-jp";

export function MenuButton({
	href = "#",
	"aria-disabled": ariaDisabled = false,
	target = "_self",
	children,
}: {
	href?: string;
	"aria-disabled"?: boolean;
	target?: string;
	children: React.ReactNode;
}) {
	return (
		<Button asChild variant="solid-fill" size="lg">
			<a
				href={href}
				className="inline-flex items-center justify-center"
				aria-disabled={ariaDisabled}
				target={target}
				rel={target === "_blank" ? "noopener noreferrer" : undefined}
			>
				{children}
			</a>
		</Button>
	);
}
