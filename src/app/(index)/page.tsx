import { MenuButton, MenuSection } from "./_components";

export default function Page() {
	return (
		<>
			<MenuSection title="はじめる">
				<MenuButton href="/select">シラバスを選択する</MenuButton>
				<MenuButton href="/file">ファイルを入出力する</MenuButton>
			</MenuSection>
			<MenuSection title="科目を見つける">
				<MenuButton href="/subjects">科目配当表から探す</MenuButton>
			</MenuSection>
		</>
	);
}
