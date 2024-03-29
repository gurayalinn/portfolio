import * as React from 'react'
import { SVGProps } from 'react'

interface SVGRProps {
  title?: string
  titleId?: string
}
export const IconDownload = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    focusable="false"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#iconDownload_svg__a)">
      <path
        fill="currentColor"
        d="m19.643 5.97-1.154.669c.238.412.678.665 1.154.665V5.971ZM1.735 16.423a1.333 1.333 0 1 0 2.53-.844l-2.53.844Zm24.74-1.018a1.333 1.333 0 1 0 2.384 1.192l-2.385-1.192ZM10.478 23.48a1.333 1.333 0 0 0-1.847 1.924l1.847-1.924ZM15 29.666l-.923.962c.516.496 1.33.496 1.846 0L15 29.666Zm6.368-4.262a1.333 1.333 0 0 0-1.847-1.924l1.847 1.924Zm-7.701 2.888a1.333 1.333 0 1 0 2.666 0h-2.666ZM16.333 13.5a1.333 1.333 0 1 0-2.666 0h2.666ZM11.61 2.667a7.938 7.938 0 0 1 6.88 3.972l2.308-1.336A10.605 10.605 0 0 0 11.608 0v2.667Zm-7.942 7.941c0-3.946 3.6-7.941 7.941-7.941V0C5.705 0 1 5.28 1 10.608h2.667Zm.598 4.97c-.59-1.77-.598-3.566-.598-4.97H1c0 1.38-.008 3.583.735 5.814l2.53-.844ZM27 12c0 1.367-.02 2.39-.526 3.404l2.385 1.192c.827-1.653.808-3.296.808-4.596H27Zm-6.116-4.696c1.62 0 3.192.573 4.34 1.478C26.371 9.688 27 10.841 27 12h2.667c0-2.174-1.176-4.036-2.792-5.311-1.617-1.277-3.77-2.051-5.991-2.051v2.666Zm-1.241 0h1.24V4.638h-1.24v2.666Zm-11.01 18.1 5.444 5.224 1.846-1.924-5.444-5.224-1.847 1.924Zm7.29 5.224 5.445-5.224-1.847-1.924-5.444 5.224 1.846 1.924Zm.41-2.336V13.5h-2.666v14.792h2.666Z"
      />
    </g>
    <defs>
      <clipPath id="iconDownload_svg__a">
        <path fill="currentColor" d="M1 0h29.333v32H1z" />
      </clipPath>
    </defs>
  </svg>
)
