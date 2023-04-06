import React from 'react'
import styled from 'styled-components'

function Section({title, description, bgImg, LButton, RButton}) {
  return (
    <div>
        <Wrap bgImg={bgImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>{LButton}</LeftButton>
                <RightButton>{RButton}</RightButton>
            </ButtonGroup>
            </Buttons>
            <DownArrow><svg xmlns='http://www.w3.org/2000/svg' fill="black" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></DownArrow>


        </Wrap>

    </div>
  )
}

export default Section

const Wrap = styled.div`
background-image:${(props) => `url("images/${props.bgImg}")`} ;
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
const DownArrow = styled.div`
height: 40px;
margin-top: 20px;
margin-bottom:2vh;
width: 40px;
animation: animateDown infinite 1.5s;

`
const Buttons = styled.div`
margin-top: 60vh;
`
