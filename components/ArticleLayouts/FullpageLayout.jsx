import { useState, useEffect } from "react";
import Link from "next/link";
// import PageTitle from "@/components/PageTitle";
// import { BlogSEO } from '@/components/SEO'
import Image from "@/components/Image";
import Tag from "@/components/Tag";
import siteMetadata from "@/data/siteMetadata";
// import Comments from "@/components/comments";
import CardBackground from "@/components/Card/Background";
import AuthorInfo from "../ArticleRelated/AuthorInfo";
import ScrollTopAndComment from "@/components/ArticleRelated/ScrollTopAndComment";
import { useTheme } from "next-themes";

const postDateTemplate = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const FullpageLayout = ({
  frontMatter,
  authorDetails,
  next,
  prev,
  children,
}) => {
  const {
    authors,
    styles,
    typography,
    slug,
    fileName,
    date,
    title,
    images,
    tags,
  } = frontMatter;
  const [filter, setFilter] = useState(() =>
    styles.filter ? styles.filter : "filter-cyberpunk-v"
  );

  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <section className="two-column-article">
        <ScrollTopAndComment />
        <div className="info-article">
          <div className="sticky-content hover:hover-header">
            <img
              src={
                frontMatter.cover ? frontMatter.cover : frontMatter.imageHeader
              }
              className={`info-article-image ${filter}`}
              alt={`${title} image`}
            />
            <div className="info-article-overlay">
              <div className="h-full flex flex-col justify-end">
                <h5 className="article-meta">
                  <span className="text-light bg-dark p-1">
                    <span className="marker-line">
                      {new Date(date).toLocaleDateString(
                        siteMetadata.locale,
                        postDateTemplate
                      )}
                    </span>
                  </span>
                </h5>
                <h1 className="article-title mb-4">
                  <span className="text-light bg-dark p-1">
                    <span className="marker-line">{title}</span>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="content-article">
          <div
            className={`tc-article-grid prose dark:prose-dark !pb-12 ${typography}-article`}
          >
            {/* <article className="">{children}</article> */}
            {children}
          </div>
          <div className="tc-article-grid">
            <h3 className="text-3xl font-bold bg-dark text-light dark:bg-light dark:text-dark mb-4">
              <span className="marker-line !py-2 !px-3">Escrito por:</span>
            </h3>
            {authorDetails.map((author, index) => (
              <AuthorInfo
                key={index}
                author={author}
                quote={authors[index].quote}
                filter={filter}
              />
            ))}
          </div>
          {(next.frontmatter || prev.frontmatter) && (
            <div className="tc-article-grid">
              <div className="gap-4">
                {prev.frontmatter && (
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold tracking-wide mb-3">
                      <span className="marker-line !py-1 !px-2 bg-dark text-light dark:bg-light dark:text-dark">
                        Previous Article
                      </span>
                    </h4>
                    <CardBackground
                      article={prev.frontmatter}
                      authors={prev.authorDetails}
                    />
                  </div>
                )}

                {next.frontmatter && (
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold tracking-wide md:text-right mb-3">
                      <span className="marker-line !py-1 !px-2 bg-dark text-light dark:bg-light dark:text-dark">
                        Next Article
                      </span>
                    </h4>
                    <CardBackground
                      article={next.frontmatter}
                      authors={next.authorDetails}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default FullpageLayout;
