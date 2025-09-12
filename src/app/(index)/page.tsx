import { MenuButton, MenuSection } from "./_components";

export const metadata = {
	title: "ホーム",
	description: "芝浦工業大学の履修登録をサポートするツール",
};

export default function Page() {
	return (
		<>
			<section className="shadow rounded-xl p-8 my-4">
				<h1 className="text-2xl font-bold mb-4">
					SIT Syllabus Navigatorへようこそ！
				</h1>
				<p>
					このプロジェクトは大学非公式・非公認で開発されています。利用したことによるいかなる損害に対しても開発者は責任を負いかねますのでご了承ください。
				</p>
			</section>
			<MenuSection title="はじめる">
				<MenuButton href="/select">シラバスを選択する</MenuButton>
				<MenuButton aria-disabled>ファイルを入出力する</MenuButton>
			</MenuSection>
			<MenuSection title="科目を見つける">
				<MenuButton href="/subjects">科目配当表から探す</MenuButton>
				<MenuButton aria-disabled>時間割から探す</MenuButton>
				<MenuButton aria-disabled>要件から探す</MenuButton>
			</MenuSection>
			<MenuSection title="改善に協力する">
				<MenuButton
					href="https://github.com/glyzinieh/sit-syllabus-navigator"
					target="_blank"
				>
					開発リポジトリ
				</MenuButton>
				<MenuButton
					href="https://github.com/glyzinieh/sit-syllabus-data"
					target="_blank"
				>
					データリポジトリ
				</MenuButton>
			</MenuSection>
		</>
	);
}
