import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      width={158}
      height={134}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d_478:225)">
        <path
          d="M103.189 118.499H54.767v-9.051c-.046-6.266.233-12.532-.279-18.706-.232-2.553-1.858-5.245-3.531-7.38-2.835-3.667-6.18-6.916-9.248-10.351-7.9-8.82-15.892-17.546-23.653-26.458-1.394-1.624-2.323-4.038-2.602-6.22-.465-3.666 1.301-6.637 4.6-8.4 3.3-1.765 6.506-1.069 9.34 1.16 1.441 1.16 2.65 2.599 3.858 3.991 5.437 6.22 11.013 12.394 16.218 18.8 3.624 4.502 7.946 6.08 13.615 5.57 4.322-.372 8.737.092 13.105.092 3.3 0 6.599-.14 9.898-.14 3.857-.046 7.714-.185 11.57 0 3.997.233 7.018-1.252 9.574-4.223 6.273-7.288 12.593-14.482 18.866-21.723a27.825 27.825 0 011.58-1.718c3.532-3.342 8.179-3.76 11.571-.974 3.532 2.831 4.415 7.983 2.045 11.975-.651 1.068-1.441 2.042-2.277 2.924-8.551 9.47-17.148 18.892-25.698 28.361-2.37 2.646-4.74 5.292-6.97 8.077-2.277 2.785-3.253 6.034-3.207 9.7.14 8.124.047 16.339.047 24.694zm-17.101-45.21c-3.718-3.991-7.25-4.41-10.41-1.438-3.02 2.831-3.299 7.426.047 11.047 2.742 2.97 6.227 5.245 9.433 7.751.372.279 1.302.372 1.673.093 3.81-2.46 7.76-4.874 10.363-8.773 1.348-1.995 1.998-4.177 1.348-6.59-.744-2.647-2.417-4.457-5.112-5.2-3.206-.881-5.344.743-7.342 3.11z"
          fill="#F5D800"
        />
        <path
          d="M58.206 36.017c.046-11.511 9.34-20.61 20.958-20.516 11.431.093 20.586 9.33 20.493 20.748-.047 11.604-9.248 20.655-20.865 20.655-11.525-.046-20.633-9.283-20.586-20.887z"
          fill="#fff"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_478:225"
          x={0.38}
          y={0.5}
          width={157.239}
          height={133}
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
          <feGaussianBlur stdDeviation={7.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.960784 0 0 0 0 0.847059 0 0 0 0 0 0 0 0 0.45 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_478:225"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_478:225"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgComponent
