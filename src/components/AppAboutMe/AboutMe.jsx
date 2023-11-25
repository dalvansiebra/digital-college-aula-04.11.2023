import DefaultImg from "../DefaultImg/DefaultImg";
import DefaultTitle from "../DefaultTitle/DefaultTitle";
import PhotoMe from "../../assets/PhotoMe.svg"
import AboutMeText from "./AboutMeText";
import DefaultBtn from "../DefaultBtn/DefaultBtn";
import "./AboutMe.css"

export default function AboutMe() {
    return (
        <>
            <div className="about_me">
                <DefaultTitle text="About" oreangetext="Me"/>
                <div className="about_me_content">
                    <DefaultImg src={PhotoMe} alt="Foto do autor" />
                    <AboutMeText className="about_me_text" />
                </div>
            </div>
        </>
    )
}

