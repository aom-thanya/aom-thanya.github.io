import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const StyledImage = styled(Image)`
  border-radius: 50%;
`

interface Props {
  src: string
  alt: string
}

const Avatar = ({ alt, src }: Props) => {
  return <StyledImage width="100px" height="100px" src={src} alt={alt} />
}

export default Avatar
