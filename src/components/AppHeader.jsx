import HeaderLogo from "./HeaderLogo"
import HeaderLink from "./HeaderLink"
import DefaultBtn from "./DefaultBtn"
import "./HeaderStyle.css"

function AppHeader () {
    return (
      <>
      <div className="header">
        <HeaderLogo />
        <div className="header_link">
          <HeaderLink className="hover" href="#" text="Home" />
          <HeaderLink href="#" text="About Me" />
          <HeaderLink href="#" text="Services" />
          <HeaderLink href="#" text="Skills" />
          <HeaderLink href="#" text="Portfolio" />
          <HeaderLink href="#" text="Contact" />
        </div> {/*fim div .link */}
        <DefaultBtn text="Hire Me" className="header_hire_me_btn" />
      </div> {/*fim div .fundo */}
      </>
    )
  }

export default AppHeader