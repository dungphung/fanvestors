import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      width={102}
      height={102}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d_478:176)">
        <circle
          cx={51}
          cy={51}
          r={44.686}
          stroke="url(#prefix__paint0_linear_478:176)"
          strokeOpacity={0.45}
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#prefix__filter1_d_478:176)">
        <circle
          cx={51.315}
          cy={51.315}
          r={39.5}
          stroke="url(#prefix__paint1_linear_478:176)"
          strokeWidth={2}
          shapeRendering="crispEdges"
        />
      </g>
      <circle cx={51.315} cy={51.315} r={33.5} fill="#fff" />
      <path
        d="M55.467 62.815h-5.776v-18.39l-5.674 1.659v-4.376l10.92-3.776h.53v24.883z"
        fill="#3C3C3C"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_478:176"
          x1={23.496}
          y1={11.217}
          x2={80.96}
          y2={92.257}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5D800" />
          <stop offset={0.536} stopColor="#F59300" />
          <stop offset={1} stopColor="#F5D800" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear_478:176"
          x1={26.662}
          y1={15.657}
          x2={78.168}
          y2={88.293}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5D800" />
          <stop offset={0.536} stopColor="#F59300" />
          <stop offset={1} stopColor="#F5D800" />
        </linearGradient>
        <filter
          id="prefix__filter0_d_478:176"
          x={0.814}
          y={0.814}
          width={100.372}
          height={100.372}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={2.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.960784 0 0 0 0 0.847059 0 0 0 0 0 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_478:176"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_478:176"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter1_d_478:176"
          x={5.814}
          y={5.814}
          width={91}
          height={91}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={2.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.960784 0 0 0 0 0.847059 0 0 0 0 0 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_478:176"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_478:176"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgComponent
