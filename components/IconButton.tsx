import React, { ReactNode } from 'react'

interface Props {
  icon: ReactNode
  onClick: () => void
  ariaLabel: string
}

const IconButton = ({ icon, onClick }: Props) => {
  return (
    <div onClick={onClick} className="icon-button">
      {icon}
    </div>
  )
}

export default IconButton
