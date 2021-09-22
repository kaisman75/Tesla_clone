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
            </ButtonGroup>
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
height:20vh;
margin: auto;
margin-bottom: 20px;
}
`
const LeftBtn=styled.button`
width: 35%;
height: 20%;
margin: 10px;
border-radius: 100px;
background-color: #393c41;
color: white;
cursor:pointer;
}
`
const RightBtn=styled.button`
width: 35%;
height: 20%;
margin: 10px;
border-radius: 100px;
background-color:white;
cursor:pointer;

}
`