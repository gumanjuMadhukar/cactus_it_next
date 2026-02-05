import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 md:px-6">
      <h1 className="text-3xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you’re looking for doesn’t exist (or it moved).</p>
      {/* <div className="mt-6">
        <Button asChild href="/" variant="primary">
          Back to Home
        </Button>
      </div> */}
      <p className="mt-6 text-sm text-slate-500">
        If you think this is a mistake, contact us via <Link className="text-cactus-700 hover:text-cactus-800" href="/contact">/contact</Link>.
      </p>
    </div>
  );
}
