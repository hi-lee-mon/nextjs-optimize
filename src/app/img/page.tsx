"use client";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl font-bold">imgタグで画像を表示</h1>
      {/* biome-ignore lint/performance/noImgElement: Demonstrating standard img tag performance */}
      <img
        src="https://images.dog.ceo/breeds/labrador/n02099712_6232.jpg"
        alt="doc1"
      />
      {/* biome-ignore lint/performance/noImgElement: Demonstrating standard img tag performance */}
      <img
        src="https://images.dog.ceo/breeds/corgi-cardigan/n02113186_9666.jpg"
        alt="doc2"
      />
      {/* biome-ignore lint/performance/noImgElement: Demonstrating standard img tag performance */}
      <img
        src="https://images.dog.ceo/breeds/finnish-lapphund/img_3801.jpg"
        alt="doc3"
      />
      {/* biome-ignore lint/performance/noImgElement: Demonstrating standard img tag performance */}
      <img
        src="https://images.dog.ceo/breeds/schipperke/n02104365_4107.jpg"
        alt="doc4"
      />
    </div>
  );
}
