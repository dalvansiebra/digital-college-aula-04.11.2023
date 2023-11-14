import DefaultImg from "../DefaultImg/DefaultImg"
import DefaultLink from "../DefaultLink/DefaultLink"
import DefaultBtn from "../DefaultBtn/DefaultBtn"
import "../Header/HeaderStyle.css"
import Logo from "../../assets/logo.svg"


export default function Header () {
    return (
      <>
      <header className="header">
        <DefaultImg src={Logo} alt="Logo" />
        <nav className="header_link">
          <DefaultLink className="hover" href="#" text="Home" />
          <DefaultLink href="#" text="About Me" />
          <DefaultLink href="#" text="Services" />
          <DefaultLink href="#" text="Skills" />
          <DefaultLink href="#" text="Portfolio" />
          <DefaultLink href="#" text="Contact" />
        </nav> {/*fim div .link */}
        <DefaultBtn text="Hire Me" className="header_hire_me_btn" />
      </header> {/*fim div .fundo */}
      </>
    )
}