import React from "react"
import { Icon, IconProps } from "./Icon"

/** InfoCircleIcon */
export const InfoCircleIcon: React.SFC<IconProps> = props => (
  <Icon {...props}>
    <title>More Info</title>
    <path
      d="M9 1.889A7.111 7.111 0 1 1 9 16.11 7.111 7.111 0 0 1 9 1.89zM9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zm-.489 4.133h.978V6.2H8.51V5.133zm.978 2.24v5.494H8.51V7.373h.978z"
      fill="#000"
      fillRule="nonzero"
    />
  </Icon>
)
