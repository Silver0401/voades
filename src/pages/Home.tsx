import React, { useState } from 'react'
import Tilt from "react-parallax-tilt";

// Components
import ShapesBox from "./../components/Home/HShapesBox"
import TitlesBox from "../components/Home/HTitlesBox"


const Home : React.FC = () => {

    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)


    const AnimateParallax = (event: any) => {
        setMouseX(((event.clientX - 600) / 12) * -1)
        setMouseY(((event.clientY - 600) / 12) * -1)
    }


    return (
      <div id="HomePage" onMouseMove={(e: any) => AnimateParallax(e)} style={{height:"100%"}}>

        <Tilt 
        className="TiltBox"
        perspective={800}
        >
          <TitlesBox />
        </Tilt>

        <ShapesBox mousePosition={[mouseX, mouseY]} />
      </div>
    );
}

export default Home