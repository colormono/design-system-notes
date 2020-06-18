import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Nav from '../components/nav';

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About us</title>
        <meta name="description" content="Learn how to build an about page using Next.js" />
      </Head>
      <Nav />
      <div className="hero">
        <h1 className="title">
          What's Next? <span aria-label="thinking">🤔</span>
        </h1>
      </div>
      <div className="text-center">
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </div>
    </Layout>
  );
}
