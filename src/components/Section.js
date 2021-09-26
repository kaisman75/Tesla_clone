import React from 'react'
import styled from 'styled-components';
import data from "./carInfo.json";
function Section() {
    const carInfo=data;
    console.log(carInfo);
    return (
        <div className="car">
            {
                carInfo.map((car) => {
                    const { title, image } = car;
                    return (
                        <Wrap style={{backgroundImage:`url(./${image})`}}>
                            <ItemText>
                                <h1>{title}</h1>
                                <p>order on line for fouchless delevry</p>
                            </ItemText>
                            <ButtonGroup>
                                <LeftBtn>
                                    Custom Order
                                </LeftBtn>
                                <RightBtn>
                                    Existing Inventory
                                </RightBtn>

                            </ButtonGroup>
                            <Arrowbtn src='/images/down-arrow.svg' />

                        </Wrap>
                    )
                })
}
        </div>
     
)
}

export default Section
const Wrap = styled.div`

background-size: cover;
background-position: center;
background-repeat: no-repeat;
height:100vh;
display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-size: cover;
`
const ItemText = styled.div`
padding-top:15vh;
text-aligne:center;
font-size:12px;
text-transform: capitalize;
`
const ButtonGroup = styled.div`
width:50vw;
height:25vh;
margin: auto;
margin-bottom: 10px;
display: flex;

justify-content: center;
align-items: center;
@media (max-width:786px){
    flex-direction:column;
}
`
const LeftBtn = styled.div`
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
const RightBtn = styled.div`
width:256px;
height: 40px;
margin: 10px;
border-radius: 100px;
background-color:white;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
opacity:0.65;
color:black;
`
const Arrowbtn = styled.img`
widtn:20px;
height:40px;
cursor:pointer;
overflow:hidden;
animation:animateDown infinite 1.5s;
`