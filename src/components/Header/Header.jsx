import HeaderLogo from "./HeaderLogo"
import DefaultLink from "../DefaultLink/DefaultLink"
import DefaultBtn from "../DefaultBtn/DefaultBtn"
import "../Header/HeaderStyle.css"

export default function Header () {
    return (
      <>
      <header className="header">
        <HeaderLogo />
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