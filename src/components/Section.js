import React from 'react'
import styled from 'styled-components'
function Section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order On Line For Touchless Delevry</p>
            </ItemText>
        </Wrap>
    )
}

export default Section
const Wrap=styled.div`
background-image:url("/images/model-3.jpg");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
height:100vh;
`
const ItemText=styled.div`
padding-top:15vh;
text-aligne:center;
`