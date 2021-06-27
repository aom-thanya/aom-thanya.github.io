import React from 'react'
import Image from 'next/image'

interface Props {
  src: string
  alt: string
}

const Avatar = ({ alt, src }: Props) => {
  return <Image width="100px" height="100px" src={src} alt={alt} className="avatar" />
}

export default Avatar
