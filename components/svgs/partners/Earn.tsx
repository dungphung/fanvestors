import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      width={139}
      height={137}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d_467:1781)">
        <path
          d="M88.571 25c-11.697 0-21.19 9.506-21.19 21.22 0 11.713 9.493 21.219 21.19 21.219 11.698 0 21.191-9.506 21.191-21.22 0-11.713-9.493-21.219-21.19-21.219zm0 33.951c-7.035 0-12.714-5.687-12.714-12.732 0-7.044 5.68-12.731 12.714-12.731 7.036 0 12.715 5.687 12.715 12.731 0 7.045-5.68 12.732-12.715 12.732zm12.715 25.464h-8.477c0-5.093-3.178-9.677-7.925-11.459l-26.106-9.76H25v46.682h25.429v-6.111L80.095 112 114 101.39v-4.244c0-7.044-5.679-12.731-12.714-12.731zM41.952 101.39h-8.476V71.683h8.476v29.707zm38.016 1.74l-29.54-8.106V71.683h6.824l24.666 9.21a3.777 3.777 0 012.415 3.522s-8.476-.213-9.747-.637l-10.087-3.353-2.67 8.064 10.087 3.352c2.161.722 4.407 1.061 6.696 1.061h22.674c1.653 0 3.136 1.019 3.814 2.42l-25.132 7.808z"
          fill="#F5D800"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_467:1781"
          x={0}
          y={0}
          width={139}
          height={137}
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
          <feGaussianBlur stdDeviation={12.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.960784 0 0 0 0 0.847059 0 0 0 0 0 0 0 0 0.65 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_467:1781"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_467:1781"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgComponent
