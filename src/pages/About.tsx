// Libraries
import React, { useEffect, useRef } from 'react';
import lottie from "lottie-web";
import {useHistory} from "react-router-dom";

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
              <a className="ContactUsButton" href="#ContactPage">
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

        <section>
          <div className="ValuesBox">
            <h2>Nuestros Valores</h2>
            <p>
              1. Visión positiva de la persona, de sus valores y de su capacidad
              de crecimiento en todas sus dimensiones: personales, relacionales
              y de trasendencia.
            </p>
            <p>
              2. Valoración de la solidaridad y de la ayuda altruista, que se
              expresan especialmente en el voluntariado social bien formado y
              comprometido: 
              <span>"Todos podemos dar, todos necesitamos recibir"</span>.
            </p>
            <p>
              3. Opción preferente por las personas que sufren, por las personas
              en peligro de exclusión, que están solos o que no encuentran
              razones sólidas para seguir viviendo.
            </p>
            <p>
              4. Fe y esperanza activa en la capacidad de las personas para
              asumir, superar y trascender sus conflictos y limitaciones: 
              <span>"Cuando existe la esperanza todos los problemas son relativos"</span>.
            </p>
            <p>
              5. El espíritu abierto y sin fronteras a todas las razas y
              culturas, sin ningún tipo de discriminación ideológica, cultural o
              religiosa, lo que se plasma en la creación de VOADES
              Internacional.
            </p>
          </div>

          <div className="MisVisBox">
            <div className="VisionContainer">
              <h2>Visión</h2>

              <div className="TextBoxVision">
                <p>Buscamos cumplir las siguientes metas</p>
                <br />
                <hr />
                <br />
                <p>
                  1. Promover la salud emocional y calidad de vida de las
                  personas
                </p>
                <br />
                <p>
                  2. Fomentar la comunicación saludable como medio de
                  crecimiento personal
                </p>
                <br />
                <p>
                  3. Promover la inclusión social de personas y colectivos en
                  riesgo de exclusión
                </p>
                <br />
                <p>
                  4. Fomentar la solidaridad y cooperacion internacional sin
                  discriminación
                </p>
                <br />
                <p>5. Sensibilizar sobre los problemas humanos</p>
                <br />
                <p>
                  6. Ofrecer recursos de comunicación y ayuda a las personas que
                  lo necesiten
                </p>
                <br />
              </div>
              <span className="SvgContainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z" />
                </svg>
              </span>
            </div>
            <div className="MissionContainer">
              <h2>Misión</h2>

              <div className="TextBoxMision">
                <p>
                  Para la consecución de las metas que visualizamos, buscamos
                  promover y organizar las siguientes actividades:
                </p>
                <br />
                <hr />
                <br />
                <p>
                  1. Fomentar la formación de calidad de los voluntarios como
                  forma de desarrollo personal
                </p>
                <br />
                <p>
                  2. Organizar cursos de comunicación para fomentar las
                  relaciones interpersonales sanas
                </p>
                <br />
                <p>
                  3. Crear escuelas de salud emocional donde se impartan cursos,
                  talleres, conferencias, entre otros eventos culturales
                </p>
                <br />
                <p>
                  4. Aprovechar las oportunidades de relación, intercambio y
                  apoyo que ofrecen las nuevas tecnologías para desarrollar el
                  programa "Te escuchamos"
                </p>
                <br />
                <p>
                  5. Extender la acción de VOADES a todos los ambientes y
                  personas, tanto nacional como internacionalmente
                </p>
              </div>

              <span className="SvgContainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.676 9.18c-1.426-.009-3.217.764-4.583 2.13-.521.521-.979 1.129-1.333 1.812 1.232-.933 2.547-1.225 4.086-.361.453-1.199 1.056-2.418 1.83-3.581zm8.154 8.143c-1.264.826-2.506 1.422-3.581 1.842.863 1.54.571 2.853-.361 4.085.684-.353 1.291-.812 1.812-1.334 1.37-1.369 2.144-3.165 2.13-4.593zm5.127-13.288c-.344-.024-.681-.035-1.011-.035-7.169 0-11.249 5.465-12.733 9.86l3.939 3.94c4.525-1.62 9.848-5.549 9.848-12.642 0-.366-.014-.74-.043-1.123zm-8.24 8.258c-.326-.325-.326-.853 0-1.178.325-.326.853-.326 1.178 0 .326.326.326.853 0 1.178-.326.326-.853.326-1.178 0zm2.356-2.356c-.651-.65-.651-1.706 0-2.357s1.706-.651 2.356 0c.651.651.651 1.706 0 2.357-.65.65-1.704.65-2.356 0zm-12.432 10.378l-.755-.755 4.34-4.323.755.755-4.34 4.323zm4.149 1.547l-.755-.755 3.029-3.054.755.755-3.029 3.054zm-5.035 2.138l-.755-.755 5.373-5.364.756.755-5.374 5.364zm21.083-14.291c-.188.618-.673 1.102-1.291 1.291.618.188 1.103.672 1.291 1.291.189-.619.673-1.103 1.291-1.291-.618-.188-1.102-.672-1.291-1.291zm-14.655-6.504c-.247.81-.881 1.443-1.69 1.69.81.247 1.443.881 1.69 1.69.248-.809.881-1.443 1.69-1.69-.81-.247-1.442-.88-1.69-1.69zm-1.827-3.205c-.199.649-.706 1.157-1.356 1.355.65.199 1.157.707 1.356 1.355.198-.649.706-1.157 1.354-1.355-.648-.198-1.155-.706-1.354-1.355zm5.387 0c-.316 1.035-1.127 1.846-2.163 2.163 1.036.316 1.847 1.126 2.163 2.163.316-1.036 1.127-1.846 2.162-2.163-1.035-.317-1.845-1.128-2.162-2.163zm11.095 13.64c-.316 1.036-1.127 1.846-2.163 2.163 1.036.316 1.847 1.162 2.163 2.197.316-1.036 1.127-1.881 2.162-2.197-1.035-.317-1.846-1.127-2.162-2.163z" />
                </svg>
              </span>
            </div>
          </div>
        </section>
      </div>
    );
}

export default About;
