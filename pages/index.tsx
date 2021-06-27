import React from 'react'
import styled from 'styled-components'

import IconList from '../components/IconList'
import Avatar from '../components/Avatar'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const HomePage = () => {
  return (
    <Wrapper>
      <Avatar src="https://github.com/aom-thanya.png" alt="An image of Aom Thanya" />
      <h1>Aom Thanya</h1>
      <h4>Web Developer, Interested in UX/UI Design ❤</h4>
      <IconList />
    </Wrapper>
  )
}

export default HomePage
