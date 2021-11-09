import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      width={142}
      height={134}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d_219:3396)">
        <path
          d="M70.75 112.924c26.962 0 48.819-21.873 48.819-48.856S97.712 15.21 70.749 15.21c-26.961 0-48.818 21.874-48.818 48.857s21.857 48.856 48.819 48.856z"
          stroke="#F5D800"
          strokeWidth={6}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M98.088 67.977l-5.858-3.909v2.057H71.674l.103-16.663h1.542L70.44 44.32l-3.186 5.245h1.747v19.852h.617l22.61.102v1.852l5.859-3.394zM70.955 30.742h-.308c-.309 0-.514-.205-.514-.514v-7.303c0-.308.205-.514.514-.514h.308c.308 0 .514.206.514.514v7.303c0 .309-.206.514-.514.514zM70.955 106.342h-.308c-.309 0-.514-.206-.514-.514v-7.303c0-.309.205-.515.514-.515h.308c.308 0 .514.206.514.515v7.303c0 .205-.206.514-.514.514zM27.583 63.862v-.308c0-.309.206-.515.514-.515h7.297c.308 0 .514.206.514.515v.308c0 .309-.206.514-.514.514h-7.297c-.308 0-.514-.205-.514-.514zM105.591 63.862v-.308c0-.309.205-.515.514-.515h7.297c.308 0 .514.206.514.515v.308c0 .309-.206.514-.514.514h-7.297c-.206 0-.514-.205-.514-.514z"
          fill="#fff"
        />
        <path
          d="M135.602 63.04c0 35.793-28.983 64.799-64.75 64.799C35.086 127.839 6 98.833 6 63.039c0-11.108 2.775-21.497 7.708-30.65"
          stroke="#fff"
          strokeWidth={4}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.061 22.411l-15.21 4.114c-.618.206-.823.926-.412 1.44l11.1 11.109c.514.514 1.233.206 1.439-.411l4.008-15.223c.308-.617-.308-1.235-.925-1.029l-15.21 4.114c-.618.206-.823.926-.412 1.44l11.1 11.109c.514.514 1.233.206 1.439-.411l4.008-15.223c.308-.617-.308-1.235-.925-1.029z"
          fill="#fff"
        />
        <path
          d="M79.177 10.377C77.841 6.674 74.244 4 70.133 4c-4.214 0-7.708 2.674-9.045 6.377 2.98-.514 5.961-.823 9.045-.823 3.083 0 6.064.309 9.044.823zM110.524 27.76l4.009-5.04c2.466-3.086 1.953-7.612-1.131-10.08-3.083-2.469-7.605-1.954-10.072 1.131l-3.803 4.732c4.111 2.674 7.811 5.76 10.997 9.257z"
          fill="#F5D800"
        />
        <path
          opacity={0.08}
          d="M84.898 99.494c19.372-7.82 28.741-29.877 20.927-49.264-7.815-19.386-29.853-28.763-49.226-20.943-19.371 7.82-28.74 29.877-20.926 49.264 7.814 19.386 29.853 28.763 49.225 20.943z"
          fill="#FEFEFE"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_219:3396"
          x={0}
          y={0}
          width={141.602}
          height={133.839}
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
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.960784 0 0 0 0 0.847059 0 0 0 0 0 0 0 0 0.45 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_219:3396"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_219:3396"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgComponent
