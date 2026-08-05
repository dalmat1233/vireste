export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="3.25" className="stroke-current" strokeWidth="1.5" opacity="0.35" />
      <path
        d="M8 9.5L16 23L24 9.5"
        className="stroke-current"
        strokeWidth="2.25"
        strokeLinecap="square"
      />
      <path d="M16 23L24 9.5" stroke="var(--brand)" strokeWidth="2.25" strokeLinecap="square" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-7 w-7" />
      <span className="font-display text-lg font-bold tracking-[0.14em] uppercase">
        Vireste
      </span>
    </span>
  );
}
