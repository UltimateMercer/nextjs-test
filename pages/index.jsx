import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { PageSEO } from "@/components/SEO";
import { useTheme } from "next-themes";
import CardBackground from "@/components/Card/Background";
import ListArticles from "@/components/List/Articles";
import siteMetadata from "@/data/siteMetadata";
import { getAllArticles } from "@/lib/services";

export const ARTICLES_PER_PAGE = 25;

export async function getStaticProps() {
  return getAllArticles();
}

const Home = ({ articles, initialDisplayArticles, pagination }) => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <section className="background-texture">
        <ListArticles
          articles={articles}
          initialDisplayPosts={initialDisplayArticles}
          pagination={pagination}
          title="Articles"
        />
      </section>
    </>
  );
};

export default Home;
