import FacebookVector from "../../assets/FacebookVector.svg"
import GitHubVector from "../../assets/GitHubVector.svg"
import LinkedInVector from "../../assets/LinkedInVector.svg"
import InstagramVector from "../../assets/InstagramVector.svg"
import DefaultImg from "../DefaultImg/DefaultImg"
import DefaultBtn from "../DefaultBtn/DefaultBtn"
import DefaultLink from "../DefaultLink/DefaultLink"

export default function BannerText() {
    return (
        <>
            <section className="banner_text">
                <div className="text">
                    <h2 className="orange_text">Hi, It's me</h2>
                    <h1>MD RIEAD MIA</h1>
                    <h2>And I'm a <span className="orange_text">Frontend Developer</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum ullam molestias autem deleniti iure earum!</p>
                </div>
                <div className="social_network_banner">
                    <DefaultLink to="https://www.facebook.com/" target="_blank" text={<><img src={FacebookVector} alt="Logo do Facebook" /></>} />
                    <DefaultLink to="https://github.com/" target="_blank" text={<><img src={GitHubVector} alt="Logo do GitHub" /></>} />
                    <DefaultLink to="https://www.linkedin.com/" target="_blank" text={<><img src={LinkedInVector} alt="Logo do LinkedIn" /></>} />
                    <DefaultLink to="https://www.instagram.com/" target="_blank" text={<><img src={InstagramVector} alt="Logo do Instagram" /></>} />
                </div>
                <div className="banner_btn">
                    <DefaultBtn type="submit" text="Download CV" />
                </div>
            </section>
        </>
    )
}