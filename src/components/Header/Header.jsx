import DefaultImg from "../DefaultImg/DefaultImg"
import DefaultLink from "../DefaultLink/DefaultLink"
import DefaultBtn from "../DefaultBtn/DefaultBtn"
import "./HeaderStyle.css"
import "./HeaderStyle.css"
import Logo from "../../assets/logo.svg"

function HeaderHireMeBtn() {
  window.open("https://www.linkedin.com/in/dalvan-siebra", "_blank");
}

export default function Header() {
  return (
    <>
      <header className="header">
        <DefaultLink href="/" text={<><img src={Logo} alt="Logo da Página" /></>} />
        <nav className="header_link">
          <DefaultLink to="/" text="Home" />
          <DefaultLink to="/about" text="About Me" />
          <DefaultLink to="/services" text="Services" />
          <DefaultLink to="/skills" text="Skills" />
          <DefaultLink to="/portfolio" text="Portfolio" />
          <DefaultLink to="/contact" text="Contact" />
        </nav> {/*fim div .link */}
        <DefaultBtn onClick={HeaderHireMeBtn} text="Hire Me" />
      </header> {/*fim div .fundo */}
    </>
  )
}