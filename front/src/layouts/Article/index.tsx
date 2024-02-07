import React, { useCallback, useEffect, useState } from 'react'
import { News, Articles, Container, Header } from './styles'
import { Scrollbars } from 'react-custom-scrollbars';
import useSWR from 'swr'
import { articleApi } from '@typings/d';
import fetcher from '@utils/fetcher';



const Article = () => {

    const {data:articleData,error} = useSWR('api/article',fetcher,{dedupingInterval:1000})
  console.log(articleData)
  return (
    <Container>
     <Scrollbars autoHide>
      <Header>
        sort
      </Header>
      <Articles>

        {articleData ? 
          articleData.items?.map((res:any,index:number)=>{
            console.log("items 값",res)
            return(
            <News key ={index}>
             
             
                <div className='articleBox'>
              <h1>
                {res.title}
              </h1>
              <span>
                {res.pubDate}
              </span>
              <p>
                {res.description}
              </p>
              </div>
              
            </News>
            )
          }):<div>로딩 중</div>
        }
       
      </Articles>
      </Scrollbars>
    </Container>
  )
}

export default Article