import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <h1 className="text-xl font-bold">Imageコンポーネントで画像を表示</h1>
      <p className="text-gray-400 mb-6">
        画像の形式がwebpに変わり、読み込みが遅延させる
      </p>
      <div className="flex flex-wrap gap-6">
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
      </div>
    </div>
  );
}
