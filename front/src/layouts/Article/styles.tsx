import styled from '@emotion/styled';

export const Container = styled.div`
width:60%;
height:100rem;
margin-left:20%;
display:flex;
position:relative;
flex-direction:column;
align-items:center;
background-color:white;
z-index:0;
`
export const Header = styled.header`
    width:100%;
    font-size:8rem;
    height:150px;
    align-items:center;
    & hr{
        width:70%;       
        height:1rem; 
        background-color:rgba(0,0,0,0.2);
        border-radius:15px;
    }
`
export const Articles = styled.div`
    width:80%;
    height:auto;
    display:flex;
    align-content:center;
    flex-direction:column;
    margin-left:5rem;
 
    
`
export const News = styled.article`
        width:100%;
        height:250px;
        align-items:center;
        display:flex;
        justify-content:left;
        border:2px solid rgba(0,0,0,0.3);
        margin-bottom:5%;
        border-radius:15px;
        padding:0rem 1rem;
        border-radius:15px;
        & .articleBox{
            margin-left:30px;
        }
        & h1{
            width:30rem;
            font-size:1.8rem;
            flex-wrap:nowrap;
        }
        & p{
            font-size:0.7rem;
            width:30rem;
        }
        & img{
            width:10rem;
        }
        :hover{
            background-color:rgba(0,0,0,0.1);
            cursor: pointer;
        }

`