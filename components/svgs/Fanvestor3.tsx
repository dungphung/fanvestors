import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      width={134}
      height={134}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d_478:179)">
        <circle
          cx={67}
          cy={67}
          r={61.5}
          stroke="url(#prefix__paint0_linear_478:179)"
          strokeOpacity={0.45}
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#prefix__filter1_d_478:179)">
        <circle
          cx={67.431}
          cy={67.431}
          r={54.57}
          stroke="url(#prefix__paint1_linear_478:179)"
          strokeWidth={2}
          shapeRendering="crispEdges"
        />
      </g>
      <circle cx={67.431} cy={67.431} r={45.966} fill="#fff" />
      <path
        d="M83.682 89H51.435v-6.982L66.29 66.402c3.66-4.168 5.49-7.48 5.49-9.934 0-1.989-.433-3.502-1.3-4.538-.868-1.037-2.127-1.556-3.777-1.556-1.63 0-2.952.699-3.968 2.095-1.015 1.376-1.523 3.1-1.523 5.174H50.483c0-2.836.71-5.449 2.127-7.84 1.417-2.412 3.385-4.295 5.903-5.65 2.518-1.353 5.332-2.03 8.443-2.03 4.993 0 8.833 1.153 11.52 3.459 2.709 2.306 4.063 5.618 4.063 9.934 0 1.82-.339 3.597-1.016 5.332-.677 1.714-1.735 3.523-3.173 5.427-1.418 1.883-3.714 4.412-6.888 7.586l-5.966 6.887h18.186V89z"
        fill="#3C3C3C"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_478:179"
          x1={29.261}
          y1={12.413}
          x2={108.108}
          y2={123.608}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5D800" />
          <stop offset={0.536} stopColor="#F59300" />
          <stop offset={1} stopColor="#F5D800" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear_478:179"
          x1={33.606}
          y1={18.505}
          x2={104.277}
          y2={118.169}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5D800" />
          <stop offset={0.536} stopColor="#F59300" />
          <stop offset={1} stopColor="#F5D800" />
        </linearGradient>
        <filter
          id="prefix__filter0_d_478:179"
          x={0}
          y={0}
          width={134}
          height={134}
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
            result="effect1_dropShadow_478:179"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_478:179"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter1_d_478:179"
          x={6.861}
          y={6.861}
          width={121.141}
          height={121.141}
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
            result="effect1_dropShadow_478:179"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_478:179"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgComponent
