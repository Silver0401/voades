import React, { useEffect } from 'react'
import anime from "animejs"

interface props {
  mousePosition: number[]
}

const HShapesBox : React.FC <props> = ({mousePosition}) => {

  useEffect(() => {

    const timeline = anime.timeline({
      easing: "linear",
      loop: true,
      duration: 5000
    })

    timeline.add({
      targets: ".s1",
      scale: [0,1],
      opacity: [1,0]
    })

    timeline.add({
      targets: "#r3r1",
      opacity: [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0],
      width: ["0%", "100%"],
      duration: 2500
    },"-=2000")

    timeline.add(
      {
        targets: "#r3r2",
        opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        width: ["100%", "0%"],
        duration: 2500,
      },
      "-=300"
    );

    timeline.add({
      targets: ".s2",
      scale: [0, 1],
      opacity: [1, 0],
    }, "-=3000");

    timeline.add(
      {
        targets: "#r2r1",
        opacity: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        width: ["0%", "100%"],
        duration: 2500,
      },
      "-=3000"
    );

    timeline.add(
      {
        targets: "#r2r2",
        opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        width: ["100%", "0%"],
        duration: 2500,
      },
      "-=700"
    );

    timeline.add({
      targets: ".s3",
      scale: [0, 1],
      opacity: [1, 0],
    }, "-=3000");


    timeline.add(
      {
        targets: "#r1r1",
        opacity: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        width: ["0%", "100%"],
        duration: 2500,
      },
      "-=5000"
    );

    timeline.add(
      {
        targets: "#r1r2",
        opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        width: ["100%", "0%"],
        duration: 2500,
      },
      "-=2500"
    );

  },[])

    return (
        <div className="HShapesBox">
          <div className="sphere s1"></div>
          <div className="sphere s2"></div>
          <div className="sphere s3"></div>

          <div className="rectangle r1">
            <span id="r1r1"></span>
            <span id="r1r2"></span>
          </div>
          <div className="rectangle r2">
            <span id="r2r1"></span>
            <span id="r2r2"></span>
          </div>
          <div className="rectangle r3">
            <span id="r3r1"></span>
            <span id="r3r2"></span>
          </div>
        </div>
    );
}

export default HShapesBox
