import React from 'react';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

import styled from 'styled-components';
function Section2() {
    return (
        <Wrap>
            <ItemText>
                <Rotate>
                    <h1>accessorie</h1>
                </Rotate>
            </ItemText>
            <Fade>
                <ButtonGroup>

                    <Button>

                        shop now

                    </Button>

                </ButtonGroup>
            </Fade>
        </Wrap>
    )
}

export default Section2
const Wrap = styled.div`
background-image:url(./images/accessories.jpg);
background-size: cover;
background-position: center;
background-repeat: no-repeat;
height:100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
background-size: cover;
align-items: center;
text-transform: capitalize;
`
const ItemText = styled.div`
padding-top:15vh;
text-aligne:center;
font-size:12px;

`
const ButtonGroup = styled.div`
    display: flex;
    height: 30vh;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    buttom:100px;
    justify-content: space-around;
`
const Button = styled.div`
width:256px;
height: 50px;
margin: 10px;
border-radius: 100px;
background-color: rgba(23,26,32,0.8);
color:white;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
@media (max-width:786px){
flex-direction:column;
}
`