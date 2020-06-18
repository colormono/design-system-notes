import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Nav from '../components/nav';

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Hello world</title>
        <meta name="description" content="Learn how to build a personal website using Next.js" />
      </Head>
      <Nav />
      <div className="hero">
        <h1 className="title">
          Next.js{' '}
          <small aria-label="love" className="mx-2">
            ❤️
          </small>{' '}
          Tailwind CSS
        </h1>
      </div>
      <div className="text-center">
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </Layout>
  );
}
