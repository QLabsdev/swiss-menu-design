export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M10 100 Q 80 10, 150 100 T 290 100" stroke="var(--pop-yellow)" strokeWidth="22" strokeLinecap="round" />
      <path d="M150 100 Q 220 190, 290 100 T 430 100" stroke="var(--primary)" strokeWidth="22" strokeLinecap="round" />
      <path d="M290 100 Q 360 10, 430 100 T 570 100" stroke="var(--pop-orange)" strokeWidth="22" strokeLinecap="round" />
      <path d="M430 100 Q 500 190, 570 100" stroke="var(--pop-pink)" strokeWidth="22" strokeLinecap="round" />
      <circle cx="585" cy="100" r="14" fill="var(--pop-blue)" />
    </svg>
  );
}

export function Blob({ className = "", color = "var(--primary)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <path
        fill={color}
        d="M48.4,-58.8C61.5,-47.4,69.7,-30.8,72.2,-13.6C74.7,3.7,71.5,21.5,62.1,35.2C52.7,48.9,37,58.5,19.7,64.4C2.4,70.3,-16.5,72.5,-31.7,65.7C-46.9,58.9,-58.4,43.1,-65.2,25.4C-72,7.7,-74.1,-11.9,-67.6,-27.6C-61.1,-43.3,-46,-55.1,-30.3,-65.4C-14.6,-75.7,1.7,-84.5,16.7,-81.4C31.7,-78.3,35.3,-70.2,48.4,-58.8Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}