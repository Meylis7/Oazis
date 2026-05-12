export default function EmailIcon({ className = "w-full h-full object-contain" }) {
  return (
    <svg
      className={className}
      width="26"
      height="20"
      viewBox="0 0 26 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#email-clip)">
        <path
          d="M25 1L13 12L1 1"
          stroke="#FF6A00"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 1H25V18C25 18.2652 24.8946 18.5196 24.7071 18.7071C24.5196 18.8946 24.2652 19 24 19H2C1.73478 19 1.48043 18.8946 1.29289 18.7071C1.10536 18.5196 1 18.2652 1 18V1Z"
          stroke="#FF6A00"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.8186 10L1.30859 18.7175"
          stroke="#FF6A00"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.6912 18.7175L15.1812 10"
          stroke="#FF6A00"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="email-clip">
          <rect width="26" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
