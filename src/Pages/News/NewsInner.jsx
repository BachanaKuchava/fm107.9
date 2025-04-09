import React from "react";
import { FaPrint, FaFacebookF, FaTwitter } from "react-icons/fa";

// Reuters image URL to be used for every image source:
const imageUrl =
  "https://www.reuters.com/resizer/v2/UC7MKYQESNLVXK3TFRQWAOEYJE.jpg?auth=8a48085fdec9b1bcee1cf77a7ad1ec678efa2b07e52ae5ee7f7107700ac49d10&height=1005&width=1920&quality=80&smart=true";

const relevantPosts = [
  {
    id: 1,
    title: "ინოვაციები კოსმოსურ ტექნოლოგიებში",
    thumbnail: imageUrl, // Updated image source
    link: "#",
    excerpt: "გაიცანით უახლესი კოსმოსური მიღწევები...",
    date: "5 აპრილი 2025",
  },
  {
    id: 2,
    title: "ბოლო სიახლეები სამეცნიერო ფრონტზე",
    thumbnail: imageUrl, // Updated image source
    link: "#",
    excerpt: "ახალი აღმოჩენები, რომლებიც ცვლის ჩვენს წარმოდგენებს...",
    date: "4 აპრილი 2025",
  },
  {
    id: 3,
    title: "დროის მანქანის იდეა კვლავ აქტუალური არის",
    thumbnail: imageUrl, // Updated image source
    link: "#",
    excerpt:
      "მეცნიერების მითითებით, თეორია უფრო რეალისტურ დადებს...",
    date: "3 აპრილი 2025",
  },
  {
    id: 4,
    title: "ახალი კვლევები და გამოკვლევები",
    thumbnail: imageUrl,
    link: "#",
    excerpt: "სცადეთ გაეცნოთ უახლოეს კვლევების შედეგებს...",
    date: "2 აპრილი 2025",
  },
  {
    id: 5,
    title: "ტექნოლოგიური ინოვაციების მომავალი",
    thumbnail: imageUrl,
    link: "#",
    excerpt: "როდესაც ტექნოლოგია გაჩრდილი მიდის, ხედვა მიიღებთ ახალ სიახლებებს...",
    date: "1 აპრილი 2025",
  },
];

function NewsInner() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Main container */}
      <div className="max-w-screen-xl mx-auto px-4 py-6 md:py-8 lg:py-10">
        {/* Grid: main article (left) and sidebar (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          {/* Left (Main Article) */}
          <article className="lg:col-span-2 bg-white rounded shadow-sm p-4 md:p-6">
            {/* Headline */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-snug">
              9 აპრილი ჩვენი ქვეყნის ისტორიაში ტრაგიკული და ერთმა მნიშვნელოვანია
            </h1>

            {/* Meta row: date, share icons, print */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 mb-4">
              {/* Date/author info */}
              <div className="space-x-2 mb-2 sm:mb-0">
                <span>5 აპრილი 2025</span>
                <span className="text-gray-400">|</span>
                <span>
                  ავტორი:{" "}
                  <span className="font-semibold text-gray-600">
                    YourRadioMedia
                  </span>
                </span>
              </div>
              {/* Share/Print icons */}
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 hover:text-blue-600">
                  <FaPrint />
                  <span>დაბეჭდე</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-600">
                  <FaFacebookF />
                  <span>გაზიარება</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-600">
                  <FaTwitter />
                  <span>ტვიტი</span>
                </button>
              </div>
            </div>

            {/* Horizontal divider */}
            <hr className="mb-4" />

            {/* Main feature image */}
            <div className="mb-6">
              <img
                src={imageUrl} // Updated image source
                alt="Feature"
                className="w-full h-auto object-cover rounded"
              />
            </div>

            {/* Article body text */}
            <div className="text-gray-700 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                საქართველოში 9 აპრილი ერთ-ერთი ყველაზე ემოციური დღეა, რომელიც
                ჩვენს ისტორიას სამუდამოდ დაამახსოვრდა. ეს თარიღი გვახსენებს
                ჩვენი ქვეყნის თავისუფლებისთვის ბრძოლას და ჩვენი წინაპრების
                თავდადებას.
              </p>
              <p>
                თითოეულმა ადამიანმა უნდა იცოდეს, რა მოხდა მაშინ, რამდენად რთული
                იყო ის პერიოდი და რამდენი მსხვერპლი გაიღო, რათა დღესდღეობით
                საქართველოში თავისუფლად გვესუნთქა.
              </p>
              <p>
                ამიტომ, წლების განმავლობაში 9 აპრილი არაერთ ღონისძიებას უმასპინძლებს -
                ზოგიერთი საჯაროდ, ზოგიერთი კი კერძო ტრადიციად. ყოველ შემთხვევაში,
                ისინი ერთმანეთს აერთიანებენ პატივისცემის და გახსოვრების ერთ მონაწილეობის.
              </p>
            </div>
          </article>

          {/* Right (Sidebar) */}
          <aside className="mt-8 lg:mt-0 flex flex-col gap-6">
            {/* Latest News */}
            <div className="bg-white rounded shadow-sm p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                ბოლო სიახლეები
              </h2>
              <div className="space-y-3">
                {relevantPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center gap-3 border-b last:border-b-0 pb-3 mb-3 last:pb-0 last:mb-0"
                  >
                    <img
                      src={post.thumbnail} // Updated image source (Reuters URL)
                      alt={post.title}
                      className="w-[100px] h-[70px] object-cover rounded"
                    />
                    <div>
                      <a
                        href={post.link}
                        className="font-bold text-gray-700 hover:text-blue-600 text-sm leading-tight block"
                      >
                        {post.title}
                      </a>
                      <p className="text-xs text-gray-400">{post.date}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sponsor Ad */}
            <div className="bg-white rounded shadow-sm p-4 flex items-center justify-center">
              <img
                src="https://avatars.mds.yandex.net/i?id=4e38760032d6f2b4381efd9383d76872a10dd33a-8370529-images-thumbs&n=13"
                alt="Sponsor Ad"
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default NewsInner;
