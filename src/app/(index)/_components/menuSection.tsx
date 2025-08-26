export function MenuSection({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="shadow rounded-xl p-8 my-4">
			<h2 className="text-2xl font-bold mb-4">{title}</h2>
			<div className="flex gap-4">{children}</div>
		</section>
	);
}
