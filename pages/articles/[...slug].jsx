import { MDXLayoutRenderer } from "@/components/MDXComponents";
import { formatSlug, getFiles } from "@/lib/mdx";

import { getArticle } from "@/lib/services";

const DEFAULT_LAYOUT = "BasicLayout";

export async function getStaticPaths() {
  const articles = getFiles("articles");
  return {
    paths: articles.map((p) => ({
      params: {
        slug: formatSlug(p).split("/"),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return getArticle(params);
}

const Article = ({ article, authorDetails, prev, next }) => {
  const { mdxSource, toc, frontmatter } = article;
  return (
    <>
      {frontmatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontmatter.styles.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontmatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <h1 className="text-5xl">
            Under Construction{" "}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </h1>
        </div>
      )}
    </>
  );
};

export default Article;
