import React, { useCallback, useEffect, useState } from 'react'
import { News, Articles, Container, Header } from './styles'
import { Scrollbars } from 'react-custom-scrollbars';
import useSWR from 'swr'
import { articleApi } from '@typings/d';
import fetcher from '@utils/fetcher';
import dayjs from 'dayjs';
import useSWRInfinite from 'swr/infinite';

const Article = () => {

  
  // const getKey = (pageIndex:number, previousPageData:string[]) => {
  //   if (previousPageData && !previousPageData.length) return null // 끝에 도달
  //   return `/users?page=${pageIndex}&limit=10`                    // SWR 키
  // }
    const {data:articleData} = useSWR('api/article',fetcher);
  //   const { data, error, isLoading, isValidating, mutate, size, setSize } = useSWRInfinite(getKey, fetcher)

  // console.log(data)

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