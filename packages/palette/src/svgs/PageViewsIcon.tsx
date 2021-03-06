import React from "react"
import { color } from "../helpers/color"
import { Icon, IconProps } from "./Icon"

/** PageViews Icon */
export const PageviewsIcon: React.SFC<IconProps> = props => (
  <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" {...props}>
    <title>page views</title>
    <g fill={color("black100")} fillRule="nonzero">
      <path d="M3.143 7.455l-.075-.074 7.408-7.408 7.408 7.408-.074.074v-.074h-2.89l-4.444-4.445-4.444 4.445h-2.89v.074z" />
      <path d="M2.095 8.429v10.476h16.762V8.429H2.095zM0 6.333h20.952V21H0V6.333z" />
    </g>
  </Icon>
)
