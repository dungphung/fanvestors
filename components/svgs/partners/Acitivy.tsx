import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      width={135}
      height={135}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d_467:1773)">
        <path
          d="M72.6 110l-6.783-16.124c6.533-2.442 12.649-5.726 18.307-9.557L72.6 110zM41.435 69.205L25.5 62.343 50.88 50.68c-3.786 5.726-7.031 11.914-9.445 18.524zM97.938 33.42c1.165 0 2.205 0 3.079.21.707 5.852-.083 17.893-13.73 31.702-7.074 7.199-15.52 12.714-25.006 16.377l-8.946-8.841c3.828-9.725 9.279-18.272 16.31-25.387C81.13 35.861 91.364 33.42 97.938 33.42zm0-8.42c-8.238 0-20.72 2.905-34.201 16.545-9.112 9.22-14.563 19.366-18.1 28.25-1.164 3.157-.374 6.61 1.915 8.967l8.862 8.925c1.581 1.6 3.703 2.568 5.908 2.568.957 0 1.956-.252 2.913-.631A79.381 79.381 0 0093.153 71.31c23.55-23.829 14.729-44.668 14.729-44.668S104.096 25 97.938 25zM78.466 56.407c-3.245-3.284-3.245-8.63 0-11.915a8.268 8.268 0 0111.775 0c3.203 3.284 3.245 8.63 0 11.915a8.268 8.268 0 01-11.775 0zM43.932 109.2l15.145-15.324a12.647 12.647 0 01-4.036-1.895L38.065 109.2h5.867zm-17.642 0h5.867l19.847-20.04-5.908-5.936-19.805 20.04v5.936zm0-11.914l17.018-17.177a12.525 12.525 0 01-1.873-4.084L26.29 91.35v5.936z"
          fill="#F5D800"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_467:1773"
          x={0.5}
          y={0}
          width={134}
          height={135}
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
            result="effect1_dropShadow_467:1773"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_467:1773"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgComponent
