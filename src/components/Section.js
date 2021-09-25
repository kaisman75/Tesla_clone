import React from 'react'
import styled from 'styled-components'
function Section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>order on line for fouchless delevry</p>
            </ItemText>
            <ButtonGroup>
                <LeftBtn>
                   Custom Order 
                </LeftBtn>
                <RightBtn>
                  Existing Inventory
                </RightBtn>
                <Arrowbtn src='images/down-arrow.svg'
/>            </ButtonGroup>
        </Wrap>
    )
}

export default Section
const Wrap=styled.div`
background-image:url("/images/model-s.jpg");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
height:100vh;
display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ItemText=styled.div`
padding-top:15vh;
text-aligne:center;
font-size:12px;
text-transform: capitalize;
`
const ButtonGroup=styled.div`
width:50vw;
height:25vh;
margin: auto;
margin-bottom: 10px;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`
const LeftBtn=styled.div`
width:256px;
height: 40px;
margin: 10px;
border-radius: 100px;
background-color: rgba(23,26,32,0.8);
color:white;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
`
const RightBtn=styled.div`
width:256px;
height: 40px;
margin: 10px;
border-radius: 100px;
background-color:white;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
`
const Arrowbtn=styled.img`
widtn:20px;
height:40px;
cursor:pointer;
animation:animateDown infinite 1.5s;
`