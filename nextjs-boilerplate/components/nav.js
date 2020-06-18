import Link from 'next/link';

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
];

export default function Nav() {
  return (
    <nav className="flex justify-between items-center">
      <ul className="flex space-x-4 py-8">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-blue-500 no-underline">About</a>
          </Link>
        </li>
      </ul>

      <ul className="flex space-x-4">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <a href={href} className="btn-blue no-underline">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
