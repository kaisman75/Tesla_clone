import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
    return (
        <Container>
           <a> 
            <img src="/images/logo.svg" alt=""/>
           </a> 
           <Menu>
               <a href="/">model s</a>
               <a href="./model y">model y</a>
               <a href="#">model 3</a>
               <a href="#">model x</a>
         
           </Menu>
           <RightMenu>
               <a href="#">Shop</a>
               <a href="#">tesla Accout</a>
               <CostumMenu/>
           </RightMenu>
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
justify-content: space-between;
flex-wrap: nowrap;
padding:10px 20px;
`
const Menu=styled.div`
display: flex;
width: 40vw;
justify-content: space-around;
flex-direction: row;
 @media(max-width:768px){
     display:none
 }
`
const RightMenu=styled.div`
 display: flex;
 width: 225px;
 justify-content: space-around;
 align-items: center;
  a{
    text-transform: uppercase;
    font-weight: bold;
  }
`
const CostumMenu = styled(MenuIcon)`
cursor:pointer;
`

