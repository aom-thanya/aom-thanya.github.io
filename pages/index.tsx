import React from 'react'

import IconList from '../components/IconList'
import Avatar from '../components/Avatar'

const HomePage = () => {
  return (
    <div className="home-page">
      <Avatar src="https://github.com/aom-thanya.png" alt="An image of Aom Thanya" />
      <h1>Aom Thanya</h1>
      <h4 className="sub-title">
        ชื่อออมชอบกิน
        <br />
        Web Developer, Interested in UX/UI Design ❤
      </h4>
      <IconList />
    </div>
  )
}

export default HomePage
