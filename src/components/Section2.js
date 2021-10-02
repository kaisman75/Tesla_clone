import React from 'react'

import styled from 'styled-components';
function Section2() {
    return (
        <Wrap>
                            <ItemText>
                                <h1>accessorie</h1>
                            </ItemText>
                            <ButtonGroup>
                               shop now
                            </ButtonGroup>
                            

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
`
const ItemText = styled.div`
padding-top:15vh;
text-aligne:center;
font-size:12px;
text-transform: capitalize;
`
const ButtonGroup = styled.div`
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
@media (max-width:786px){
flex-direction:column;
}
`