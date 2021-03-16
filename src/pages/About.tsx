// Libraries
import React, { useEffect, useRef } from 'react';
import lottie from "lottie-web";
import {useHistory} from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

// Components
import SkillsComponent from "./../components/About/Skills";
import CarouselComponent from "./../components/About/Carousel";


export const About : React.FC = () => {

    const LottieContainer1 = useRef <HTMLDivElement> (null)
    const LottieContainer2 = useRef <HTMLDivElement> (null)
    const LottieContainer3 = useRef <HTMLDivElement> (null)

    const History = useHistory()

    useEffect(() => {

        if (LottieContainer1 && LottieContainer1.current) {
        lottie.loadAnimation({
            container: LottieContainer1.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("./../resources/LottieMeditate.json"),
        });
        }

        if (LottieContainer2 && LottieContainer2.current) {
        lottie.loadAnimation({
            container: LottieContainer2.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("./../resources/LottieData.json"),
        });
        }


        if (LottieContainer3 && LottieContainer3.current) {
        lottie.loadAnimation({
            container: LottieContainer3.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("./../resources/LottieSocialMedia.json"),
        });
        }

    },[])


    return (
      <div id="AboutPage">
        <span className="bgSquare"></span>

        <section>
          <SkillsComponent />
          <div ref={LottieContainer1} className="LottieAnimation"></div>
        </section>

        <section>
          <CarouselComponent />

          <div className="CarouselData">
            <h1>Nuestros Eventos</h1>
            <p>
              Estamos constantemente organizando eventos y reuniones gratuitas
              para todo el público.
            </p>
            <h2>
              ¿Te gustaría ser parte de voades? o ¿Te interesa nuestro
              contenido?
            </h2>
            <span className="MessageBox">
              <a
                className="ContactUsButton"
                href="#ContactPage"
                >
                <p>Contáctanos y revisa nuestras redes sociales</p>
                <div className="LottieAnimation3" ref={LottieContainer3}></div>
              </a>
              <div
                className="ResourcesButton"
                onClick={() => History.push("/Resources")}
                >
                <p>Checa nuestros videos y recursos gratuitos</p>
                <div className="LottieAnimation2" ref={LottieContainer2}></div>
              </div>
            </span>
          </div>
        </section>
      </div>
    );
}

export default About;
