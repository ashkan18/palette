import React from "react"
import { Icon, IconProps } from "./Icon"

/** FairIcon */
export const FairIcon: React.SFC<IconProps> = props => (
  <Icon {...props}>
    <title>fair</title>
    <g fill="none" fillRule="evenodd">
      <path
        d="M9.533 7.027H14V14h1v1H3v-1h1V7.027h4.467V1.376l4.266 2.29-3.2 1.55v1.811zM8 14v-3.08h2.074V14H13V8.027H5V14h3z"
        fill="#000"
        fillRule="nonzero"
      />
    </g>
  </Icon>
)
