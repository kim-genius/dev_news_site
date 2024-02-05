import styled from '@emotion/styled';

export const Container = styled.div`
width:20%;
height:100%;
position:fixed;
margin-left:80%;
background:#13005A;
`

export const Search = styled.header`
    height:2rem;
    position:relative;
    display:flex;
    width:100%;
    justify-content:center;
    & input{
        width:50%;
        border-radius:15px;
        background-color:white;
        height:2rem;
    }
`