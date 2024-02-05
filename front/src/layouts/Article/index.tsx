import React from 'react'
import { Article, Articles, Container, Header } from './styles'
import axios from 'axios'

const Home = () => {
    

  return (
    <Container>
      <Header>
        sort
      </Header>
      <Articles>
        <Article>
        <img src='https://velog.velcdn.com/images/heelieben/post/aae00279-723b-40e3-bcea-cb547b73b60f/image.png' alt='이미지'/>
            <div className='articleBox'>
          <h1>
            제목
          </h1>
          <span>
            기사날짜
          </span>
          <p>
            내용
          </p>
          </div>
          
        </Article>
      </Articles>
    </Container>
  )
}

export default Home