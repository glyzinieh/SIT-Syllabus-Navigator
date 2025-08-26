"use client";

import {
	CloseIcon,
	HamburgerIcon,
	HamburgerMenuButton,
} from "@/components/digital-go-jp";
import Link from "next/link";
import { useId, useRef } from "react";
import { DrawerLink } from "./drawerLink";
import { DrawerSection } from "./drawerSection";

export default function Header() {
	const drawerId = useId();
	const drawerRef = useRef<HTMLDialogElement | null>(null);

	return (
		<>
			<header className="shadow">
				<div className="container mx-auto px-10 py-4 flex justify-between text-xl">
					<Link href="/">SIT Syllabus Navigator</Link>
					<HamburgerMenuButton
						className="p-1"
						onClick={() => drawerRef.current?.showModal()}
					>
						<HamburgerIcon className="flex-none" />
						メニュー
					</HamburgerMenuButton>
				</div>
			</header>

			<dialog
				aria-labelledby={`${drawerId}-heading`}
				className="m-[unset] max-w-full max-h-[unset] w-72 h-dvh start-auto bg-white shadow-2 border-l border-l-transparent [scrollbar-gutter:stable] backdrop:bg-opacity-gray-100 forced-colors:backdrop:bg-[#000b]"
				ref={drawerRef}
			>
				<div className="flex justify-end p-4">
					<HamburgerMenuButton
						className="p-1"
						onClick={() => drawerRef.current?.close()}
					>
						<CloseIcon className="flex-none" />
						閉じる
					</HamburgerMenuButton>
				</div>

				<div className="mx-auto px-4">
					<DrawerSection>
						<DrawerLink href="/" level={1} drawerRef={drawerRef}>
							ホーム
						</DrawerLink>
					</DrawerSection>
					<DrawerSection title="はじめる">
						<DrawerLink
							href="/select"
							level={2}
							drawerRef={drawerRef}
						>
							シラバスを選択する
						</DrawerLink>
						<DrawerLink
							href="/file"
							level={2}
							drawerRef={drawerRef}
						>
							ファイルを入出力する
						</DrawerLink>
					</DrawerSection>
					<DrawerSection title="科目を見つける">
						<DrawerLink
							href="/subjects"
							level={2}
							drawerRef={drawerRef}
						>
							科目配当表から探す
						</DrawerLink>
					</DrawerSection>
				</div>
			</dialog>
		</>
	);
}
