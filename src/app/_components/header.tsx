"use client";

import {
	CloseIcon,
	HamburgerIcon,
	HamburgerMenuButton,
} from "@/components/digital-go-jp";
import Link from "next/link";
import { useId, useRef } from "react";

export default function Header() {
	const drawerId = useId();
	const drawerRef = useRef<HTMLDialogElement | null>(null);

	const linkClasses = "p-2 hover:bg-solid-gray-50 hover:underline rounded-lg";

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
					<section className="my-4">
						<div className={`text-xl ${linkClasses}`}>
							<Link
								href="/"
								onClick={() => drawerRef.current?.close()}
							>
								ホーム
							</Link>
						</div>
					</section>
					<section className="my-4">
						<h2 className="text-xl p-2">はじめる</h2>
						<div className={`text-lg ml-4 ${linkClasses}`}>
							<Link
								href="/select"
								onClick={() => drawerRef.current?.close()}
							>
								シラバスを選択する
							</Link>
						</div>
						<div className={`text-lg ml-4 ${linkClasses}`}>
							<Link
								href="/import"
								onClick={() => drawerRef.current?.close()}
							>
								ファイルから読み込む
							</Link>
						</div>
					</section>
					<section className="my-4">
						<h2 className="text-xl p-2">科目を見つける</h2>
						<div className={`text-lg ml-4 ${linkClasses}`}>
							<Link
								href="/subjects"
								onClick={() => drawerRef.current?.close()}
							>
								科目配当表から探す
							</Link>
						</div>
					</section>
				</div>
			</dialog>
		</>
	);
}
