import React from "react"
import { Icon, IconProps } from "./Icon"

/** PublicationIcon */
export const PublicationIcon: React.SFC<IconProps> = props => (
  <Icon {...props}>
    <title>publication</title>
    <path
      d="M9.455 6.98v6.887L14 12.749V5.232l-4.5.946-.045.802zM9 15l-6-1.467V4l6 1.262L15 4v9.533L9 15zm-.345-.324l-.057.233v-.287l.057.054zm-.2-.832V6.17L4 5.232v7.517l4.455 1.095zm.947.065v1l-.238-.971.117-.029h.121z"
      fill="#000"
      fillRule="nonzero"
    />
  </Icon>
)
