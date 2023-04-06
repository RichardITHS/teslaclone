import React from 'react'
import Section from './Section'
import styled from 'styled-components'

function Home() {
  return (
    <Container>
        <Section
        title={'Model 3'}
        description={'Leasing starting at $349/mo'}
        bgImg={'Homepage-Model-3-Desktop-LHD.jpeg'}
        LButton={"View Inventory"}
        RButton={"Custom Order"}

        />
           <Section
        title={'Model Y'}
        description={'Schedule a Demo Drive'}
        bgImg={'Homepage-Model-Y-Global-Desktop.jpeg'}
        LButton={"View Inventory"}
        RButton={"Custom Order"}

        />
              <Section
        title={'Model S'}
        description={'Schedule a Demo Drive'}
        bgImg={'Model-S-homepage-desktop.jpeg'}
        LButton={"View Inventory"}
        RButton={"Custom Order"}

        />
                 <Section
        title={'Model X'}
        description={'Schedule a Demo Drive'}
        bgImg={'Homepage-Model-X-Desktop-LHD.jpeg'}
        LButton={"View Inventory"}
        RButton={"Custom Order"}

        />
                  <Section
        title={'Solar Panels'}
        description={'Lowest Cost Solar Panels in America'}
        bgImg={'_25-HP-SolarPanels-D.jpeg'}
        LButton={"Order Now"}
        RButton={"Learn More"}

        />

    </Container>
  )
}

export default Home

const Container = styled.div`
margin-top:-10vh;

`
