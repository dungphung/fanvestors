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
      <g filter="url(#prefix__filter0_d_478:187)">
        <circle
          cx={51}
          cy={51}
          r={44.686}
          stroke="url(#prefix__paint0_linear_478:187)"
          strokeOpacity={0.45}
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#prefix__filter1_d_478:187)">
        <circle
          cx={51.314}
          cy={51.315}
          r={39.5}
          stroke="url(#prefix__paint1_linear_478:187)"
          strokeWidth={2}
          shapeRendering="crispEdges"
        />
      </g>
      <circle cx={51.314} cy={51.315} r={33.5} fill="#fff" />
      <path
        d="M47.965 47.963h2.717c2.153 0 3.23-1.053 3.23-3.161 0-.82-.256-1.487-.77-2-.512-.524-1.235-.786-2.17-.786-.763 0-1.43.222-2 .667-.557.444-.837.996-.837 1.657h-5.759c0-1.31.365-2.478 1.094-3.503.73-1.026 1.737-1.823 3.025-2.393 1.299-.58 2.723-.871 4.272-.871 2.769 0 4.945.632 6.529 1.897 1.583 1.264 2.375 3.002 2.375 5.212 0 1.071-.33 2.085-.991 3.042-.65.946-1.6 1.715-2.854 2.307 1.322.479 2.358 1.208 3.11 2.188.752.968 1.128 2.17 1.128 3.606 0 2.221-.854 3.999-2.563 5.332-1.71 1.333-3.954 2-6.734 2-1.629 0-3.144-.308-4.546-.924-1.39-.626-2.443-1.486-3.161-2.58-.718-1.105-1.077-2.359-1.077-3.76h5.794c0 .763.307 1.424.922 1.983.616.558 1.373.837 2.273.837 1.014 0 1.823-.28 2.427-.837.604-.57.906-1.294.906-2.17 0-1.254-.313-2.143-.94-2.667s-1.492-.786-2.598-.786h-2.802v-4.29z"
        fill="#3C3C3C"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_478:187"
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
          id="prefix__paint1_linear_478:187"
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
          id="prefix__filter0_d_478:187"
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
            result="effect1_dropShadow_478:187"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_478:187"
            result="shape"
          />
        </filter>
        <filter
          id="prefix__filter1_d_478:187"
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
            result="effect1_dropShadow_478:187"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_478:187"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgComponent
