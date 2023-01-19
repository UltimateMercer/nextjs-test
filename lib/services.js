import fs from "fs";
import generateRss from "@/lib/generate-rss";
import { formatSlug, getAllFilesFrontMatter, getFileBySlug } from "@/lib/mdx";

export const ARTICLES_PER_PAGE = 25;

export const getAllArticles = async () => {
  const rawArticles = await getAllFilesFrontMatter("articles");

  const articles = await Promise.all(
    rawArticles.map(async (article) => {
      const authorList = article.authors;
      const authorPromise = authorList.map(async (author) => {
        const authorResults = await getFileBySlug("authors", [author.name]);
        return authorResults.frontmatter;
      });
      const authorDetails = await Promise.all(authorPromise);
      return { article, authorDetails };
    })
  );

  const initialDisplayArticles = articles.slice(0, ARTICLES_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(articles.length / ARTICLES_PER_PAGE),
  };
  return { props: { articles, initialDisplayArticles, pagination } };
};

export const getArticle = async (params) => {
  const rawArticles = await getAllFilesFrontMatter("articles");

  const allArticles = await Promise.all(
    rawArticles.map(async (article) => {
      const authorList = article.authors;
      const authorPromise = authorList.map(async (author) => {
        const authorResults = await getFileBySlug("authors", [author.name]);
        return authorResults.frontmatter;
      });
      const authorDetails = await Promise.all(authorPromise);

      return { article, authorDetails };
    })
  );

  const articleIndex = allArticles.findIndex(
    (data) => formatSlug(data.article.slug) === params.slug.join("/")
  );

  const prev = {
    frontmatter: allArticles[articleIndex + 1]
      ? allArticles[articleIndex + 1].article
      : null,
    authorDetails: allArticles[articleIndex + 1]
      ? allArticles[articleIndex + 1].authorDetails
      : null,
  };

  const next = {
    frontmatter: allArticles[articleIndex - 1]
      ? allArticles[articleIndex - 1].article
      : null,
    authorDetails: allArticles[articleIndex - 1]
      ? allArticles[articleIndex - 1].authorDetails
      : null,
  };

  const article = await getFileBySlug("articles", params.slug.join("/"));

  const authorList = article.frontmatter.authors;
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug("authors", [author.name]);
    return authorResults.frontmatter;
  });
  const authorDetails = await Promise.all(authorPromise);

  if (rawArticles.length > 0) {
    const rss = generateRss(rawArticles);
    fs.writeFileSync("./public/feed.xml", rss);
  }

  return { props: { article, authorDetails, prev, next } };
};
