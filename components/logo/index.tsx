import { css } from "@emotion/react"
import { IoMdPlanet } from "react-icons/io"
const saturnStyles = css`
 positon:relative;
 top:0.2rem;
 margin-left: -0.75rem;
 margin-right: -0.75rem;
`
const logoStyles = css`
color: var(--color-text-invert);
font-size:7rem;
display:flex;
align-items:center;
text-align:center;
font-variant:small-caps;
`
const Logo = () => {
    return (
        <span css={logoStyles}>
        Devl
        <IoMdPlanet css={saturnStyles} />
        g
    </span>
  )
}

export default Logo;