import Link from 'next/link'
import { GiAstronautHelmet } from 'react-icons/gi'
import { navigationStyles } from './styles'
const Navigation = () => {
  return (
    <nav css={navigationStyles}>
      <Link href="/">
        <a aria-label="Back To Home">
          <GiAstronautHelmet />
        </a>
      </Link>
      <Link href="/about">
        <a> about</a>
      </Link>
    </nav>
  )
}
export default Navigation
