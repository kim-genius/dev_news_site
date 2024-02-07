import React, { useCallback, useEffect, useState } from 'react'
import { News, Articles, Container, Header } from './styles'
import { Scrollbars } from 'react-custom-scrollbars';
import axios from 'axios'
import useSWR from 'swr'
import { articleApi } from '@typings/d';
import fetcher from '@utils/fetcher';



const Article = () => {

    const {data:articleData} = useSWR<articleApi[]>('api/article',fetcher)


    
  return (
    <Container>
     <Scrollbars autoHide>
      <Header>
        sort
      </Header>
      <Articles>

        {
          articleData?.map((res:articleApi,index:number)=>{
            return(
            <News key ={index}>
             
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
      </Scrollbars>
    </Container>
  )
}

export default Article