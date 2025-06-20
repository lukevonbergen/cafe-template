import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';

export default function NotFound() {
  return (
    <main className={`${siteConfig.styles.bgLight} py-24 px-6 md:px-12 text-center`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${siteConfig.styles.textPrimary}`}>Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">Sorry, we couldn&apos;t find the page you were looking for.</p>
        <Link
          href="/"
          className={`${siteConfig.styles.bgPrimary} ${siteConfig.styles.textLight} px-6 py-3 rounded-full font-medium shadow hover:opacity-90 transition`}
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
