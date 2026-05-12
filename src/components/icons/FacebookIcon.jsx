export default function FacebookIcon({ className = "w-full h-full object-contain" }) {
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
      <g clipPath="url(#facebook-clip)">
        <path
          d="M21 33C27.6274 33 33 27.6274 33 21C33 14.3726 27.6274 9 21 9C14.3726 9 9 14.3726 9 21C9 27.6274 14.3726 33 21 33Z"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 16H24C23.2044 16 22.4413 16.3161 21.8787 16.8787C21.3161 17.4413 21 18.2044 21 19V33"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 23H25"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="facebook-clip">
          <rect width="32" height="32" fill="white" transform="translate(5 5)" />
        </clipPath>
      </defs>
    </svg>
  );
}
