import React, { ReactNode } from 'react'
import styled from 'styled-components'

const IconStyled = styled.div`
  cursor: pointer;
`

interface Props {
  icon: ReactNode
  onClick: () => void
  ariaLabel: string
}

const IconButton = ({ icon, onClick }: Props) => {
  return <IconStyled onClick={onClick}>{icon}</IconStyled>
}

export default IconButton
