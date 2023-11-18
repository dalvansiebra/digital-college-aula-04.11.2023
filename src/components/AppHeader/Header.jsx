import DefaultImg from "../DefaultImg/DefaultImg"
import DefaultLink from "../DefaultLink/DefaultLink"
import DefaultBtn from "../DefaultBtn/DefaultBtn"
import "./HeaderStyle.css"
import Logo from "../../assets/logo.svg"


export default function Header() {
  return (
    <>
      <header className="header">
        <DefaultLink href="#" text={<><img src={Logo} alt="Logo da Página" /></>} />
        <nav className="header_link">
          <DefaultLink className="hover" href="#" text="Home" />
          <DefaultLink href="#" text={<><img src="" alt="" /></>} />
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