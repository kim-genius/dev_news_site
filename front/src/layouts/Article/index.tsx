import React, { useCallback, useState } from 'react'
import { News, Articles, Container, Header } from './styles'
import axios from 'axios'

export interface articleApi {
    author:string, 
    content:string,
    description:string,
    publishedAt:string, 
    source : {id:string,name:string},
    title:string,
    url:string,
    urlToImage: string
}

const Article = () => {
    const [articleData,setArticleData] = useState([])
    const newsArticle = useCallback(()=>{
        axios.get('api/article')
        .then((res)=>{setArticleData(res.data.articles),console.log(res.data.articles)})
    },[articleData,setArticleData])
    newsArticle()

    
  return (
    <Container>
      <Header>
        sort
      </Header>
      <Articles>

        {
          articleData.map((res:articleApi)=>{
            return(
            <News>
             
              <img src = {`${res.urlToImage}`} alt='이미지'/>
                <div className='articleBox'>
              <h1>
                {res.title}
              </h1>
              <span>
                {res.publishedAt}
              </span>
              <p>
                {res.content}
              </p>
              </div>
              
            </News>
            )
          })
        }
       
      </Articles>
    </Container>
  )
}

export default Article