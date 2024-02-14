import React, { useCallback, useEffect, useState } from 'react'
import { News, Articles, Container, Header } from './styles'
import { Scrollbars } from 'react-custom-scrollbars';
import useSWR from 'swr'
import { articleApi } from '@typings/d';
import fetcher from '@utils/fetcher';
import dayjs from 'dayjs'


const Article = () => {

    const {data:articleData,error} = useSWR('api/article',fetcher)
  return (
    <Container>
     <Scrollbars autoHide>
      <Header>
        News
      </Header>
      <Articles>

        {articleData ? 
          articleData.items?.map((res:any,index:number)=>{
            console.log("items 값",res)
            return(
            <News key ={index}>
             
             <img src ='https://velog.velcdn.com/images/heelieben/post/b5926f2b-d3d7-48c2-8f02-bc1356400d27/image.png'></img>
                <div className='articleBox'>
              <h1>
                {res.title.replace(/&quot;/g, '"').replace(/<\/?b>/g,'')}
              </h1>
              <span>
                {dayjs(res.pubDate).format('YYYY-MM-DD hh:mmA')}
              </span>
              <p>
                {res.description.replace(/&quot;/g, '"').replace(/<\/?b>/g,'')
               }
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