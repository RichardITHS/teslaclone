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
`
const ItemText = styled.div`

`
