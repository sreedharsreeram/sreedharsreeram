import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reads — Sreeram Sreedhar',
};

const sections = [
  {
    category: 'CS',
    books: [
      { title: 'Inference Engineering', author: 'Philip Kiely' },
    ],
  },
  {
    category: 'Self Help',
    books: [
      { title: 'The Alchemist', author: 'Paulo Coelho' },
    ],
  },
];

export default function Reads() {
  return (
    <main className="min-h-screen px-6 py-16 sm:py-24 max-w-2xl mx-auto">
      <header className="flex items-center justify-between mb-16">
        <Link href="/" className="font-display text-sm font-medium tracking-tight text-ink border-b border-ink/20 hover:border-ink pb-0.5 no-underline transition-colors">
          sreeramsreedhar.me
        </Link>
        <nav className="flex gap-4 sm:gap-6 text-sm text-ink-dim">
          <Link href="/reads" className="hover:text-ink transition-colors">
            Reads
          </Link>
        </nav>
      </header>

      <h1 className="text-3xl sm:text-4xl font-display mb-10">
        Reads
      </h1>

      <div className="space-y-10 text-[15px] sm:text-base text-ink/90">
        {sections.map((section) => (
          <div key={section.category}>
            <h2 className="text-sm font-medium uppercase tracking-widest text-ink-dim mb-4">
              {section.category}
            </h2>
            <ul className="space-y-2">
              {section.books.map((book) => (
                <li key={book.title} className="flex items-baseline gap-2">
                  <span className="text-ink">{book.title}</span>
                  {book.author && (
                    <span className="text-ink-faint">— {book.author}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <footer className="mt-16 pt-8 border-t border-ink/10">
        <Link href="/" className="text-sm text-ink-dim hover:text-ink transition-colors">
          ← back
        </Link>
      </footer>
    </main>
  );
}
