import React, { useCallback } from 'react'
import { News, Articles, Container, Header } from './styles'
import axios from 'axios'

const Article = () => {

    const newsArticle = useCallback(()=>{
        axios.get('api/article')
        .then((res)=>{console.log(res)})
    },[])
    newsArticle()

  return (
    <Container>
      <Header>
        sort
      </Header>
      <Articles>
        <News>
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
          
        </News>
      </Articles>
    </Container>
  )
}

export default Article