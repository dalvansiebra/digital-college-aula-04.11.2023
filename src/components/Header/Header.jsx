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
        <DefaultLink href="#" text={<><img src={Logo} alt="Logo da Página" /></>} />
        <nav className="header_link">
          <DefaultLink href="#" text="Home" />
          <DefaultLink href="#" text="About Me" />
          <DefaultLink href="#" text="Services" />
          <DefaultLink href="#" text="Skills" />
          <DefaultLink href="#" text="Portfolio" />
          <DefaultLink href="#" text="Contact" />
        </nav> {/*fim div .link */}
        <DefaultBtn onClick={HeaderHireMeBtn} text="Hire Me" />
      </header> {/*fim div .fundo */}
    </>
  )
}