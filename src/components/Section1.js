import React from 'react'
import styled from 'styled-components';
import data from "./carInfo.json";
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';


function Section1() {
    const carInfo=data;
    console.log(carInfo);
    return (
        <div className="car">
            {
                carInfo.map((car) => {
                    const {id, title, description,image,range,
                    time,
                    topSpeed,
                    peakPower } = car;
                    return (

                        <Wrap id={id} style={{backgroundImage:`url(./${image})`}}>
                            
                            <ItemText>
                               <Rotate >
                                <h1>{title}</h1>
                                <p>{description}</p>
                                </Rotate>
                            </ItemText>
                            
                        
                            <ButtonGroup>
                                <Fade bottom>
                                <LeftBtn>
                                    Custom Order
                                </LeftBtn>
                                <RightBtn>
                                      Existing Inventory
                                </RightBtn>
                                </Fade>
                            </ButtonGroup>
                           <ArrowSpace>
                            <Arrowbtn1 src='/images/down-arrow.svg' />
                            <Arrowbtn2 src='/images/down-arrow.svg' />
                            
                            </ArrowSpace>
                            
                        </Wrap>
                       
                    )
                })
}
        </div>
     
)
}

export default Section1
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
width:30vw;
margin: 0 auto;
padding-top:15vh;
text-aligne:center;
font-size:12px;
text-transform: capitalize;
line-height: 2.5;
 h1{
     border-radius:10px ;
     background-color:rgba(250, 158, 158, 0.671);;

`
const ButtonGroup = styled.div`
width:50vw;
height:15vh;
margin: auto;
margin-bottom: 10px;
display: flex;
justify-content: center;
align-items: center;
@media (max-width:786px){
    flex-direction:column;
}
z-index:0;
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
const ArrowSpace=styled.div`
height:60px;
display:flex;
flex-direction: column;
`
const Arrowbtn1 = styled.img`
widtn:20px;
height:40px;
overflow:hidden;
animation:animateDown infinite 1.2s;
`
const Arrowbtn2 = styled.img`
widtn:20px;
height:40px;
overflow:hidden;
animation:animateDown infinite 1s;
`