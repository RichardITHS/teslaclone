import React from 'react'
import Section from './Section'

function Home() {
  return (
    <div>
        <Section
        title={'Model 3'}
        description={'Leasing starting at $349/mo'}
        bgImg={'Homepage-Model-3-Desktop-LHD.jpeg'}
        LButton={"View Inventory"}
        RButton={"Custom Order"}

        />
           <Section
        title={'Hej'}
        description={'Leasing starting at $349/mo'}
        bgImg={'Homepage-Model-3-Desktop-LHD.jpeg'}
        LButton={"View Inventory"}
        RButton={"Custom Order"}

        />

    </div>
  )
}

export default Home
