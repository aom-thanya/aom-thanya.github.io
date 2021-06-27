import React from 'react'
import styled from 'styled-components'
import EmailIcon from '../icons/Email'
import IconButton from './IconButton'

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
`

const IconList = () => {
  return (
    <IconWrapper>
      <IconButton
        icon={<EmailIcon />}
        onClick={() => window.open('https://github.com/aom-thanya')}
        ariaLabel="github"
      />
      <IconButton
        icon={<EmailIcon />}
        onClick={() => window.open('https://www.linkedin.com/in/thanya-khampoosa-696833196/')}
        ariaLabel="linkedin"
      />
      <IconButton
        icon={<EmailIcon />}
        onClick={() => window.open('mailto:aom.thanya@hotmail.com', '_self')}
        ariaLabel="email"
      />
      <IconButton
        icon={<EmailIcon />}
        onClick={() => window.open('https://aom-thanya.medium.com/')}
        ariaLabel="medium"
      />
    </IconWrapper>
  )
}

export default IconList
