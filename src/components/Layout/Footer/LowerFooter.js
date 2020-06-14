import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

import { getColor } from '../../../utils/styles'

const StyledFooter = styled.div`
  background-color: ${getColor};
  padding: 15px 0;
  color: #fff;
  font-size: 15px;

  @media (min-width: 400px) {
    font-size: initial;
  }
`

export const LowerFooter = () => (
  <StyledFooter color="#4F1778">
    <Container className="text-center">
      © {new Date().getFullYear()} Todos os direitos reservados a <strong>Vota Cidade</strong>
    </Container>
  </StyledFooter>
)