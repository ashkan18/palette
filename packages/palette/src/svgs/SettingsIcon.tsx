import React from "react"
import { color } from "../helpers"
import { Icon, IconProps } from "./Icon"

/** SettingsIcon */
export const SettingsIcon: React.SFC<IconProps> = props => {
  return (
    <Icon {...props} viewBox="0 0 18 18">
      <title>settings</title>
      <path
        d="M3.892 8.405a5.197 5.197 0 0 0-.006 1.143 5.118 5.118 0 0 0 1.89 3.462 5.119 5.119 0 0 0 3.795 1.105 5.119 5.119 0 0 0 3.459-1.916 5.118 5.118 0 0 0 1.078-3.794 5.119 5.119 0 0 0-1.913-3.432A5.118 5.118 0 0 0 8.43 3.892a5.118 5.118 0 0 0-3.435 1.887 5.119 5.119 0 0 0-1.102 2.626zm.29-3.438L2.939 3.724l.808-.808L4.992 4.16A6.257 6.257 0 0 1 8.43 2.743V.977H9.57v1.766c1.3.117 2.486.63 3.437 1.418l1.245-1.245.808.808-1.243 1.243a6.258 6.258 0 0 1 1.44 3.438H17v1.143h-1.738a6.257 6.257 0 0 1-1.42 3.463l1.219 1.219-.808.808-1.216-1.216a6.258 6.258 0 0 1-3.466 1.441v1.714H8.43v-1.714a6.258 6.258 0 0 1-3.466-1.441l-1.216 1.216-.808-.808 1.219-1.219a6.257 6.257 0 0 1-1.42-3.463H1V8.405h1.742a6.258 6.258 0 0 1 1.44-3.438zM9 11.86a2.857 2.857 0 1 1 0-5.714 2.857 2.857 0 0 1 0 5.714zm0-1.142a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.429z"
        fill={color(props.fill)}
        fillRule="evenodd"
      />
    </Icon>
  )
}
