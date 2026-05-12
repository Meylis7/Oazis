export default function InstagramIcon({ className = "w-full h-full object-contain" }) {
  return (
    <svg
      className={className}
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="42" height="42" rx="8" fill="#9CB7BB" />
      <g clipPath="url(#instagram-clip)">
        <path
          d="M21 26C23.7614 26 26 23.7614 26 21C26 18.2386 23.7614 16 21 16C18.2386 16 16 18.2386 16 21C16 23.7614 18.2386 26 21 26Z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27 9H15C11.6863 9 9 11.6863 9 15V27C9 30.3137 11.6863 33 15 33H27C30.3137 33 33 30.3137 33 27V15C33 11.6863 30.3137 9 27 9Z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.5 15.75C28.1904 15.75 28.75 15.1904 28.75 14.5C28.75 13.8096 28.1904 13.25 27.5 13.25C26.8096 13.25 26.25 13.8096 26.25 14.5C26.25 15.1904 26.8096 15.75 27.5 15.75Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="instagram-clip">
          <rect x="5" y="5" width="32" height="32" rx="4" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
