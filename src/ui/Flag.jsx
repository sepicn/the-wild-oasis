/* eslint-disable react/prop-types */
import styled from "styled-components"

export const Flagg = styled.img`
  max-width: 2rem;
  border-radius: var(--border-radius-tiny);
  display: block;
  border: 1px solid var(--color-grey-100);
`
function Flag({ src, alt }) {
  return <Flagg src={src} alt={alt}></Flagg>
}

export { Flag }
