import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Contact us</title>
        <meta name="description" content="Learn how to build an about page using Next.js" />
      </Head>
      <div className="hero">
        <h1 className="title">
          Contact? <span aria-label="thinking">🤔</span>
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
