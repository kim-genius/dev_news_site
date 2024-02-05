import styled from "@emotion/styled";

export const Container = styled.div`
    margin:0;
    width:20%;
    height:100%;
    position:fixed;
    display:flex;
    background-color:#13005A;
    justify-content:center;
    z-index:0;
`

export const NavList = styled.ul`
    text-decoration:none;
    text-align:center;
    color:white;
    list-style:none;
    font-size:3rem;
    line-height:4rem;
    & li {
        font-size:2rem;
    }
`