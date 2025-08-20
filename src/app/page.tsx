import Link from "next/link";
import { Button } from "@/components/digital-go-jp";

export default function Page() {
	return (
		<>
			<section className="shadow rounded-xl p-8 my-4">
				<h2 className="text-2xl font-bold mb-4">はじめる</h2>
				<div className="flex gap-4">
					<Button asChild variant="solid-fill" size="lg">
						<Link
							href="/select"
							className="inline-flex items-center justify-center"
						>
							シラバスを選択する
						</Link>
					</Button>
					<Button asChild variant="solid-fill" size="lg">
						<Link
							href="/file"
							className="inline-flex items-center justify-center"
						>
							ファイルを入出力する
						</Link>
					</Button>
				</div>
			</section>
			<section className="shadow rounded-xl p-8 my-4">
				<h2 className="text-2xl font-bold mb-4">科目を見つける</h2>
				<div className="flex gap-4">
					<Button asChild variant="solid-fill" size="lg">
						<Link
							href="/subjects"
							className="inline-flex items-center justify-center"
						>
							科目配当表から探す
						</Link>
					</Button>
				</div>
			</section>
		</>
	);
}
