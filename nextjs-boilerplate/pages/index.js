import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import DebitCardGroup from '../components/DebitCardGroup';

export default function IndexPage() {
  const [selectedDebitCard, setSelectedDebitCard] = useState(89234567893456234567);

  const debitCards = [
    {
      cardProvider: 'VISA',
      cardType: 'Tarjeta de débito',
      cardBank: 'Galicia',
      cardNumber: 23456789234567893456,
    },
    {
      cardProvider: 'AMEX',
      cardType: 'Tarjeta de débito',
      cardBank: 'BBVA',
      cardNumber: 89234567893456234567,
    },
    {
      cardProvider: 'VISA',
      cardType: 'Tarjeta de débito',
      cardBank: 'Santander',
      cardNumber: 56789345234567892346,
    },
  ];

  const handleSelection = (cardNumber) => {
    setSelectedDebitCard(cardNumber);
  };

  return (
    <Layout>
      <Head>
        <title>Hello world</title>
        <meta name="description" content="Learn how to build a personal website using Next.js" />
      </Head>
      <div className="hero">
        <h1 className="title">
          Next.js{' '}
          <small aria-label="love" className="mx-2">
            ❤️
          </small>{' '}
          Tailwind CSS
        </h1>
      </div>

      <section>
        <h1 className="px-10 text-center text-4xl font-bold">Section title</h1>
        <div className="flex my-10">
          <Link href="/about">
            <div className="flex-grow bg-primary-100 p-10 cursor-pointer">Feature A</div>
          </Link>
          <div className="flex-grow bg-primary-200 p-10">Feature B</div>
          <div className="flex-grow bg-primary-300 p-10">Feature C</div>
        </div>
      </section>

      <DebitCardGroup items={debitCards} selected={selectedDebitCard} onSelection={handleSelection} />

      <div className="text-center">
        <Link href="/about">
          <div>About</div>
        </Link>
      </div>
    </Layout>
  );
}
