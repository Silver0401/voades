import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import VaodesLogo from "./../resources/voadesLogo.svg";

interface props {
    siteStructure: "horizontal" | "vertical"
}


const Nav: React.FC<props> = ({siteStructure}) => {

    const [navState, toggleNav] = useState(false)
    const History = useHistory()

    const Icon = (chosen: string) => {

      switch (chosen){
        case "Contact":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M17.5 2c.276 0 .5.224.5.5v19c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h11zm2.5 0c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.5 1h3c.276 0 .5.224.5.501 0 .275-.224.499-.5.499h-3c-.275 0-.5-.224-.5-.499 0-.277.225-.501.5-.501zm1.5 18c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-13h10v13z" />
            </svg>
          );          
        case "About":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21.155 8.64c-.909 1.519-2.327 3.067-4.097 3.004-.413.706-.852 1.677-1.339 2.803l-1.312.553c.936-2.343 2.231-4.961 3.698-6.994-.67.529-1.746 1.637-2.662 2.783-1.098-1.828-.3-3.691.973-5.179.021.641.359 1.196.601 1.475-.087-.53-.114-1.489.195-2.351.718-.732 1.364-1.271 2.113-1.76-.083.478.08 1.026.262 1.361.024-.49.224-1.43.521-1.84.924-.727 2.332-1.373 3.892-1.495-.081.973-.436 2.575-1.024 3.604-.515.404-1.221.68-1.791.833.493.089 1.031.077 1.494-.001-.269.743-.552 1.428-.998 2.276-.679.468-1.578.732-2.203.825.46.187 1.272.245 1.677.103zm-13.841 3.805l.645.781 4.773-2.791-.668-.768-4.75 2.778zm6.96-.238l-.668-.767-4.805 2.808.645.781 4.828-2.822zm4.679.007c-.421.203-.851.341-1.286.398-.12.231-.246.494-.377.773l.298.342c.623.692.459 1.704-.376 2.239-.773.497-5.341 3.376-6.386 4.035-.074-.721-.358-1.391-.826-1.948-.469-.557-6.115-7.376-7.523-9.178-.469-.6-.575-1.245-.295-1.816.268-.549.842-.918 1.43-.918.919 0 1.408.655 1.549 1.215.16.641-.035 1.231-.623 1.685l1.329 1.624 7.796-4.446c1.422-1.051 1.822-2.991.93-4.513-.618-1.053-1.759-1.706-2.978-1.706-1.188 0-.793-.016-9.565 4.475-1.234.591-2.05 1.787-2.05 3.202 0 .87.308 1.756.889 2.487 1.427 1.794 7.561 9.185 7.616 9.257.371.493.427 1.119.15 1.673-.277.555-.812.886-1.429.886-.919 0-1.408-.655-1.549-1.216-.156-.629.012-1.208.604-1.654l-1.277-1.545c-.822.665-1.277 1.496-1.377 2.442-.232 2.205 1.525 3.993 3.613 3.993.596 0 1.311-.177 1.841-.51l9.427-5.946c.957-.664 1.492-1.781 1.492-2.897 0-.745-.24-1.454-.688-2.003l-.359-.43zm-7.933-10.062c.188-.087.398-.134.609-.134.532 0 .997.281 1.243.752.312.596.226 1.469-.548 1.912l-5.097 2.888c-.051-1.089-.579-2.081-1.455-2.732l5.248-2.686zm2.097 13.383l.361-.905.249-.609-3.449 2.017.645.781 2.194-1.284z" />
            </svg>
          );
        case "Resources":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M15 8c-3.004 0-5.45 2.268-5.609 5.123-1.928.333-3.391 1.954-3.391 3.905 0 2.193 1.848 3.972 4.125 3.972h9.75c2.277 0 4.125-1.779 4.125-3.972 0-1.951-1.463-3.572-3.391-3.905-.159-2.855-2.605-5.123-5.609-5.123zm-10.899 7.998c-2.266-.014-4.101-1.785-4.101-3.97 0-1.951 1.463-3.572 3.391-3.905.159-2.855 2.605-5.123 5.609-5.123 2.235 0 4.158 1.258 5.063 3.078-.702.084-1.371.261-2.002.52-.535-.886-1.464-1.598-3.061-1.598-3.872 0-3.828 4.025-3.701 4.822-1.064.055-3.299.265-3.299 2.206 0 1.087.953 1.972 2.125 1.972h.734c-.368.608-.63 1.28-.758 1.998z" />
            </svg>
          );
        default:
          break
      }

      return (
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M17.5 2c.276 0 .5.224.5.5v19c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h11zm2.5 0c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.5 1h3c.276 0 .5.224.5.501 0 .275-.224.499-.5.499h-3c-.275 0-.5-.224-.5-.499 0-.277.225-.501.5-.501zm1.5 18c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-13h10v13z" />
          </svg>
        </div>
      );
    }

    return (
      <nav className="NavBar">
        <a
          className="LogoBox"
          href="#HomePage"
          onClick={() => {
            toggleNav(false);
            siteStructure === "horizontal"
              ? History.push("/")
              : History.push("/");
          }}
        >
          <img alt="VoadesLogo" src={VaodesLogo} />
          <h2>México</h2>
        </a>

        <div
          className={navState ? "Burguer BToggled" : "Burguer"}
          onClick={() => toggleNav(!navState)}
        >
          <span id="line1" />
          <span id="line2" />
          <span id="line3" />
        </div>

        {siteStructure === "horizontal" ? (
          <ul className={navState ? "NavToggled" : "NavNotToggled"}>
            <li>
              {Icon("About")}
              <Link onClick={() => toggleNav(false)} to="/About">
                Acerca De Nosotros
              </Link>
            </li>
            <li>
              {Icon("Contact")}
              <Link onClick={() => toggleNav(false)} to="/Contact">
                Contáctanos
              </Link>
            </li>
            <li>
              {Icon("Resources")}
              <Link onClick={() => toggleNav(false)} to="/Resources">
                Recursos
              </Link>
            </li>
          </ul>
        ) : (
          <ul className={navState ? "NavToggled" : "NavNotToggled"}>
            <li>
              {Icon("About")}
              <a onClick={() => {toggleNav(false); History.push("/")}} href="/#AboutPage">
                Acerca de Nosotros
              </a>
            </li>
            <li>
              {Icon("Contact")}
              <a onClick={() => {toggleNav(false); History.push("/")}} href="/#ContactPage">
                Contáctanos
              </a>
            </li>
            <li>
              {Icon("Resources")}
              <Link onClick={() => toggleNav(false)} to="/Resources">
                Recursos
              </Link>
            </li>
          </ul>
        )}
      </nav>
    );
}

export default Nav