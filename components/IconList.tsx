import React from 'react'
import EmailIcon from '../icons/Email'
import GithubIcon from '../icons/Github'
import LinkedinIcon from '../icons/Linkedin'
import MediumIcon from '../icons/Medium'
import IconButton from './IconButton'

const IconList = () => {
  return (
    <div className="icon-list">
      <IconButton
        icon={<GithubIcon />}
        onClick={() => window.open('https://github.com/aom-thanya')}
        ariaLabel="github"
      />
      <IconButton
        icon={<LinkedinIcon />}
        onClick={() => window.open('https://www.linkedin.com/in/thanya-khampoosa-696833196/')}
        ariaLabel="linkedin"
      />
      <IconButton
        icon={<EmailIcon />}
        onClick={() => window.open('mailto:aom.thanya@hotmail.com', '_self')}
        ariaLabel="email"
      />
      <IconButton
        icon={<MediumIcon />}
        onClick={() => window.open('https://aom-thanya.medium.com/')}
        ariaLabel="medium"
      />
    </div>
  )
}

export default IconList
