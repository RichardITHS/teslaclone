import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <div>
        <Wrap>
            <ItemText>
                <h1>Model 3</h1>
                <p>Leasing starting at $349/mo</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton>View Inventory</LeftButton>
                <RightButton>Custom Order</RightButton>
            </ButtonGroup>


        </Wrap>

    </div>
  )
}

export default Section

const Wrap = styled.div`
background: url('/images/Homepage-Model-3-Desktop-LHD.jpeg');
height:100vh;
display: flex;
background-position: center;
background-size: cover;
align-items: center;
flex-direction: column;
justify-content: space-between;
`
const ItemText = styled.div`
padding-top:15vh ;
text-align: center;
`

const ButtonGroup = styled.div`
display: flex;
justify-content: center;
//Wrap
`
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
align-items: center;
color: white;
text-align: center;
padding: 10px 80px;
border-radius: 5px;
font-size: 14px;
cursor: pointer;
display: flex;
margin: 8px;
`
const RightButton = styled(LeftButton)`
background-color: rgba(244, 244, 244, 1);
color:black;
`
