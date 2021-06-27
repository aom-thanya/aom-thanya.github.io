import * as React from 'react'

const MediumIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      fill="currentColor"
      {...props}
    >
      <path d="M449.446 0C483.971 0 512 28.03 512 62.554v386.892C512 483.97 483.97 512 449.446 512H62.554C28.03 512 0 483.97 0 449.446V62.554C0 28.03 28.029 0 62.554 0h386.892zm-19.502 137.321h-99.495l-70.926 176.926-80.672-176.926H74.481v6.049l33.614 40.493a13.939 13.939 0 014.537 11.762v159.114a18.32 18.32 0 01-4.872 15.794l-37.816 45.868v6.048h107.227v-6.048l-37.816-45.868a18.984 18.984 0 01-5.21-15.794V217.132l94.119 205.317h10.924l80.84-205.317v163.651c0 4.367 0 5.208-2.858 8.063l-29.075 28.229v6.048H429.27v-6.048l-28.066-27.556a8.4 8.4 0 01-3.194-8.065V178.991a8.401 8.401 0 013.194-8.066l28.74-27.555v-6.049z" />
    </svg>
  )
}

export default MediumIcon
