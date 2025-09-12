import Header from "./_components/header";
import "./globals.css";

export const metadata = {
	title: {
		template: "%s | SIT Syllabus Navigator",
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className="font-sans">
				<Header />
				<main className="container mx-auto px-12 py-8">{children}</main>
			</body>
		</html>
	);
}
