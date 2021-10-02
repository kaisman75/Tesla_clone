import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <Container>
           <a> 
            <img src="/images/logo.svg" alt=""/>
           </a> 
           <Menu>
               <a>model s</a>
               <a>model y</a>
               <a>model 3</a>
               <a>model x</a>
         
           </Menu>
        </Container>
    )
}

export default Header

const Container=styled.div`
min-height: 20px;
min-width: 100vw;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
position: fixed;
flex-direction: row;
justify-content: space-around;
flex-wrap: nowrap;
`
const Menu=styled.div`
display: flex;
width: 376px;
justify-content: space-around;
flex-direction: row;

`
