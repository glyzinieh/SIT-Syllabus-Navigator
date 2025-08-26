export function DrawerSection({
	title,
	children,
}: {
	title?: string;
	children: React.ReactNode;
}) {
	return (
		<section className="my-4">
			{title && <h2 className="text-xl p-2">{title}</h2>}
			{children}
		</section>
	);
}
