import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      width={181}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M181 6L171 .227v11.546L181 6zM0 7h172V5H0v2z"
        fill="url(#prefix__paint0_linear_356_606)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_356_606"
          x1={181}
          y1={6}
          x2={-14.48}
          y2={6}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5D800" />
          <stop offset={1} stopColor="#F5D800" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgComponent
