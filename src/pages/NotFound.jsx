import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex-1 max-w-5xl mx-auto px-4 pt-16 md:pt-24 pb-16 text-center">
      <p className="font-body text-xs uppercase tracking-widest text-brick font-semibold mb-2">
        Error 404
      </p>
      <h1 className="font-display text-4xl md:text-6xl font-semibold text-espresso mb-4 tracking-tight">
        Page Not Found
      </h1>
      <p className="font-body text-base md:text-lg text-espresso/70 max-w-md mx-auto mb-8 leading-relaxed">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center px-6 py-2.5 bg-brick text-cream rounded-md text-sm font-medium hover:bg-brick/90 transition-colors shadow-sm"
      >
        Return to Home
      </Link>
    </div>
  );
}
