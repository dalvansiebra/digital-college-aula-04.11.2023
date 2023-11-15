import FacebookVector from "../../assets/FacebookVector.svg"
import GitHubVector from "../../assets/GitHubVector.svg"
import LinkedInVector from "../../assets/LinkedInVector.svg"
import InstagramVector from "../../assets/InstagramVector.svg"
import DefaultImg from "../DefaultImg/DefaultImg"
import DefaultBtn from "../DefaultBtn/DefaultBtn"

export default function BannerText () {
    return(
        <>
            <section className="banner_text">
                <div className="text">
                    <h2 className="orange_text">Hi, It's me</h2>
                    <h1>MD RIEAD MIA</h1>
                    <h2>And I'm a <span className="orange_text">Frontend Developer</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum ullam molestias autem deleniti iure earum!</p>
                </div>
                <div className="social_network_banner">
                    <DefaultImg src={FacebookVector} alt="Logo do Facebook" />
                    <DefaultImg src={GitHubVector} alt="Logo do GitHub" />
                    <DefaultImg src={LinkedInVector} alt="Logo do LinkedIn" />
                    <DefaultImg src={InstagramVector} alt="Logo do Instagram" />
                </div>
                <div className="banner_btn">
                    <DefaultBtn text="Download CV"/>
                </div>
            </section>
        </>    
    )
}