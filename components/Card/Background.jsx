import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

const CardBackground = ({ article, authors, isFeatured = false }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="card card-background hover:hover-card !rounded-2xl hover:hover-card-uv hover:dark:hover-card-neon-yellow">
      <img
        src={article.cover ? article.cover : article.imageHeader}
        className={`!rounded-2xl ${article.styles.filter} ${
          isFeatured
            ? "card-background-image-featured"
            : "card-background-image"
        }`}
        alt={`${article.title} image`}
      />
      {/* <Image
        src={article.cover ? article.cover : article.imageHeader}
        className={`card-background-image-featured !rounded-2xl ${article.styles.filter}`}
        width={10000}
        height={10000}
        alt={`${article.title} image`}
      /> */}
      {/* <div className="card-img-overlay flex flex-col">
        <div className="flex justify-end">
          <span className="text-light text-base bg-dark capitalize !py-1">
            <span className="marker-line">12 Jan 2023</span>
          </span>
        </div>
      </div> */}
      <div className="card-img-overlay flex flex-col justify-end">
        <div className="flex items-center mb-2 leading-normal !text-base">
          <span className="marker-line !py-1 bg-dark text-light capitalize font-medium">
            {article.channel}
          </span>
        </div>
        {/* <h3 className="card-title text-2xl">
          <span className="marker-line bg-dark text-light !py-1">
            {article.title}
          </span>
        </h3> */}

        <Link className="" href={`/articles/${article.slug}`}>
          <h3 className="card-title text-2xl">
            <span className="marker-line bg-dark text-light !py-1 hover:underline underline-offset-1">
              {article.title}
            </span>
          </h3>
        </Link>
        <div className="flex">
          {authors.map((author) => (
            <div key={author.name} className="flex items-center my-1">
              <div className="flex-shrink-0">
                <img
                  id={`anchor-${author.slug}-${article.slug}`}
                  src={author.avatar}
                  className="w-10 h-10 object-cover rounded-full border border-dark mr-2"
                  alt={`${author.name} avatar`}
                />
                {mounted && (
                  <Tooltip
                    anchorId={`anchor-${author.slug}-${article.slug}`}
                    content={`Por: ${author.name}`}
                    place="right"
                  />
                )}
              </div>
            </div>
          ))}

          <div className="flex items-center my-1">
            <span className="text-light text-base font-medium bg-dark capitalize tracking-wide !py-1">
              <span className="marker-line">12 Jan 2023</span>
            </span>
          </div>

          <div className="flex flex-1 items-center">
            <Link className="ml-auto" href={`/articles/${article.slug}`}>
              <button className="tracking-wider text-light dark:text-dark bg-uv-500 dark:bg-neon-yellow-500 hover:ring-2 ring-uv-300 dark:ring-neon-yellow-200 py-1 px-3 rounded font-medium transition-all !text-base">
                Ler mais...
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardBackground;
