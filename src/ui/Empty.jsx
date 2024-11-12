/* eslint-disable react/prop-types */

import styled from "styled-components"

const CenteredParagraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin: 0;
  font-size: large;
  font-weight: 600;
`

function Empty({ resourceName }) {
  return (
    <CenteredParagraph>No {resourceName} could be found.</CenteredParagraph>
  )
}

export default Empty
