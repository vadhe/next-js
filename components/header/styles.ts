import { css } from '@emotion/react'
// import tw from 'twin.macro'
const SR_ONLY = `
 clip:rect(0,0,0,0);
 clip-path:inset(50%);
 height:1px;
 overflow: hidden;
 postion:absolute;
 white-space:nowrap;
 width:1px;

`

const container = css`
  min-height: 40vh;
  background-color: var(--background-accent);
  padding: 1rem 0;
  display: grid;
  place-items: center;
`

const title = css`
${SR_ONLY}
`
// const paragraf = css`
//  'bg-red-800';
// `
export { container, title }
