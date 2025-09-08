import { MenuButton, MenuSection } from "./_components";

export default function Page() {
	return (
		<>
			<MenuSection title="はじめる">
				<MenuButton href="/select">シラバスを選択する</MenuButton>
				<MenuButton aria-disabled>ファイルを入出力する</MenuButton>
			</MenuSection>
			<MenuSection title="科目を見つける">
				<MenuButton href="/subjects">科目配当表から探す</MenuButton>
				<MenuButton aria-disabled>時間割から探す</MenuButton>
				<MenuButton aria-disabled>要件から探す</MenuButton>
			</MenuSection>
			<MenuSection title="SIT Syllabus Navigatorについて">
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
