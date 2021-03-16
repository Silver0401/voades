import React, { useState } from 'react'
import {
  Map,
  GoogleApiWrapper,
  InfoWindow,
  Marker,
} from "google-maps-react";
 
import { Button } from "@chakra-ui/react";


export const Contact : React.FC = () => {

  const [isButtonLoading, setIsButtonLoading] = useState(false)
  let today = new Date();
  today.setDate(today.getDate());
  const Year = today.getFullYear();

  const SendData = () => {
    setIsButtonLoading(true)
    setTimeout(() => {
      setIsButtonLoading(false)
    },3000)
  }

  const PlaneIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M24 1l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-4.638 6.251c.99-.576 1.864-1.296 2.638-2.17v2.053c-.667.588-1.391 1.096-2.175 1.527l-.463-1.41zm-4.883 3.06c-.978.125-2.355.188-3.479.188v-1.455c1.032 0 2.327-.056 3.229-.169l.25 1.436zm4.184-1.086l-.055.023c-.879.369-1.831.655-2.865.859l-.25-1.438c.982-.197 1.885-.473 2.714-.833l.456 1.389z" />
      </svg>
    );
  }

    return (
      <div id="ContactPage">
        <div className="ContactContainer">
          <form>
            <div className="Data">
              <h2>Contáctanos</h2>

              <div className="Fields">
                <span className="Field1">
                  <div className="box">
                    <input type="text" id="Name" minLength={2} required />
                    <p>Nombre</p>
                  </div>
                  <div className="box">
                    <input type="email" minLength={2} required />
                    <p>Email</p>
                  </div>
                  <div className="box">
                    <input type="tel" minLength={2} required />
                    <p>Teléfono</p>
                  </div>
                </span>
                <span className="Field2">
                  <div className="box">
                    <textarea required />
                    <p>Mensaje</p>
                  </div>
                  <Button
                  size="lg"
                  leftIcon={<PlaneIcon/>}
                  isLoading={isButtonLoading}
                  loadingText="Enviando"
                  onClick={SendData}
                  colorScheme="whatsapp"
                  variant="outline"
                  >
                    Enviar
                  </Button>
                </span>
              </div>
            </div>

            <div className="MapContainer">

            </div>
          </form>
        </div>

        <div className="SocialMedia">
          <div className="BottomBar">
            <p>Todos los derechos reservados - ®Voades {Year}</p>
          </div>

          <div className="Icons">
            <span>
              <svg
                onClick={() =>
                  window.open("https://wa.me/527714116235", "_newtab")
                }
                className="Whats"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
              </svg>
            </span>
            <span>
              <svg
                onClick={() =>
                  window.open("mailto:smortmc2@gmail.com", "_newtab")
                }
                className="Twit"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
              </svg>
            </span>
            <span>
              <svg
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/Smort-mc2-104848164862837/?view_public_for=104848164862837",
                    "_newtab"
                  )
                }
                className="Face"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
              </svg>
            </span>
            <span>
              <svg
                onClick={() =>
                  window.open("https://www.instagram.com/smortmc2/", "_newtab")
                }
                className="Insta"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    );
}

export default Contact;