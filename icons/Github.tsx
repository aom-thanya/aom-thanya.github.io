import * as React from 'react'

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        d="M45 1H5C2.8 1 1 2.8 1 5v40c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V5c0-2.2-1.8-4-4-4z"
        fill="#282828"
      />
      <path
        d="M30.4 40h-8v-4c-5.5 1.2-7-3-7-3-1-2-2-3-2-3-2-1.2 0-1 0-1 2 0 3 2 3 2 1.8 3 4.9 2.5 6 2 0-1 .4-2.5 1-3-4.4-.5-8-3-8-8s1-6 2-7c-.2-.5-1-2.3 0-5 0 0 2 0 4 3 1-1 4-1 5-1s4 0 5 1c2-3 4-3 4-3 1.1 2.7.2 4.5 0 5 1 1 2 2 2 7s-3.6 7.5-8 8c.6.5 1 2.2 1 3v7z"
        fill="#FFF"
      />
    </svg>
  )
}

export default GithubIcon
