import Image from "next/image";
import { Suspense } from "react";
import VStack from "@/components/v-stack";

export default async function Home() {
  return (
    <div>
      <h1 className="text-xl font-bold">Imageコンポーネントで画像を表示</h1>
      <p className="text-gray-400 mb-6">
        画像の形式がwebpに変わり、読み込みが遅延させる
      </p>
      <VStack className="gap-4">
        {/* SSR部分のラップで囲むことでページ全体はSSRになるが静的な部分を優先して表示することができる */}
        <Suspense
          fallback={
            <p className="text-red-500 animate-bounce">
              Sleep APIの呼び出し中・・・
            </p>
          }
        >
          <Sleep />
        </Suspense>
        <div>
          <Image
            src={"https://images.dog.ceo/breeds/labrador/n02099712_6232.jpg"}
            alt="dog"
            width={300}
            height={300}
            priority={true}
          />
          <p className="text-gray-200">↑は優先度上げているので表示が早い</p>
        </div>
        <Image
          src={
            "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_9666.jpg"
          }
          alt="dog"
          width={300}
          height={300}
        />
        <Image
          src={"https://images.dog.ceo/breeds/finnish-lapphund/img_3801.jpg"}
          alt="dog"
          width={300}
          height={300}
        />
        <Image
          src={"https://images.dog.ceo/breeds/schipperke/n02104365_4107.jpg"}
          alt="dog"
          width={300}
          height={300}
        />
      </VStack>
    </div>
  );
}

async function Sleep() {
  await fetch("http://localhost:3000/api/getUser", { cache: "no-store" });
  return <div>Sleepの読み込み完了</div>;
}
