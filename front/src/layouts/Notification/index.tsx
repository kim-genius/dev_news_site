import React from 'react'
import { Container, Search } from './styles'

const Notification = () => {
  return (
    <Container>Noti
      <Search>
        <input style={{textAlign:'center'}}placeholder='뉴스 검색'></input>
      </Search>
    </Container>
  )
}

export default Notification