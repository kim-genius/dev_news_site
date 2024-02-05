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
`
export const Article = styled.article`
        width:100%;
        height:300px;
        align-items:center;
        border:1px solid black;
        display:flex;
        justify-content:left;
        padding:7rem;
        border-radius:5px;
        & .articleBox{
            margin-left:30px;
        }
        & h1{

        }
        & p{

        }
        & img{
            width:40%;
        }

`