import { Button } from "@/components/digital-go-jp";

export default function Page() {
  return (
    <section className="shadow rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-4">はじめる</h2>
      <div className="flex gap-4">
        <Button asChild variant="solid-fill" size="lg">
          <a href="/select">シラバスを選択する</a>
        </Button>
        <Button asChild variant="solid-fill" size="lg">
          <a href="/import">ファイルから読み込む</a>
        </Button>
      </div>
    </section>
  );
}
