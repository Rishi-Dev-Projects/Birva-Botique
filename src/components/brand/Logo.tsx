import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
  className?: string;
}

export default function Logo({
  variant = 'dark',
  showSubtitle = true,
  className = '',
}: LogoProps) {
  const isDark = variant === 'dark';

  return (
    <Link
      href="#hero"
      className={`group inline-flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B59660] rounded-sm transition-opacity hover:opacity-90 ${className}`}
      aria-label="Birva Boutique Home"
    >
      {/* Luxury Monogram "B" Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-[#B59660]/40 bg-[#FCFAF6] shadow-[inset_0_1px_2px_rgba(181,150,96,0.15)] group-hover:border-[#B59660] transition-colors">
        <svg
          viewBox="0 0 40 40"
          className="w-6 h-6 text-[#B59660]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle outer circular aura */}
          <circle
            cx="20"
            cy="20"
            r="17.5"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="2 2"
            opacity="0.6"
          />
          {/* Inner royal crest diamond motif */}
          <path
            d="M20 5.5L24 10.5L20 15.5L16 10.5Z"
            fill="currentColor"
            opacity="0.2"
          />
          {/* Stately Serif Letter 'B' */}
          <text
            x="20"
            y="26"
            textAnchor="middle"
            fill="currentColor"
            fontFamily="var(--font-serif)"
            fontSize="18"
            fontWeight="500"
            letterSpacing="-0.02em"
          >
            B
          </text>
        </svg>
      </div>

      {/* Typographic Wordmark */}
      <div className="flex flex-col tracking-tight">
        <span
          className={`font-serif text-xl sm:text-2xl tracking-[0.22em] font-medium transition-colors ${
            isDark ? 'text-[#30251F]' : 'text-[#FCFAF6]'
          }`}
        >
          BIRVA
        </span>
        {showSubtitle && (
          <span
            className={`text-[9px] uppercase tracking-[0.34em] font-sans font-medium transition-colors ${
              isDark ? 'text-[#817568]' : 'text-[#CDB384]'
            }`}
          >
            Boutique &bull; Bardoli
          </span>
        )}
      </div>
    </Link>
  );
}
