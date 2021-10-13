import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { display } from '@mui/system';


function Header() {
    
    const[style,setStyle]=useState(false);
   
    
    
    return (
        <Container >
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
            <CostumMenu onClick={()=>{setStyle(true)}} />
             <Navburger Show = {style} >
                <OffIcon onClick={()=>{setStyle(false)}}>
                    <HighlightOffIcon/></OffIcon>
               <li><a href="#">exiting enventory</a></li>
               <li><a href="#">exiting enventory</a></li>
               <li><a href="#">exiting enventory</a></li>
               <li><a href="#">exiting enventory</a></li>
               <li><a href="#">exiting enventory</a></li>
           </Navburger>
           </RightMenu>
          
        </Container>
    )
}

export default Header

const Container=styled.div`
min-height: 46px;
min-width: 100%;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
position: fixed;
flex-direction: row;
flex-wrap: nowrap;
padding:10px 0px;
justify-content: space-around;
z-index:1;

`
const Menu=styled.div`
display: flex;
width: 40vw;
height:10%;
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
  align-items: flex-start
`
const CostumMenu = styled(MenuIcon)`
cursor:pointer;
display:flex;
`
const Navburger=styled.div`
top:0;
bottom:0;
right:0;
background:white;
width:300px;
height: 100vh;
list-style: none;
padding: 35px;
transform: ${props=>props.Show?"translate(0)":"translate(100%)"};
transition:transform 0.2s;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
position: absolute;

    li {
        padding: 15px 0;
        border-bottom: 2px solid rgba(0,0,0,.2);
        display: flex;
        font-weight: 600;
        text-align:start;
        width:100%;
    }
`
const OffIcon =styled.div`
text-aligne:right;
width: 100%;
text-align:right;
cursor:pointer;
z-index:10;
`
