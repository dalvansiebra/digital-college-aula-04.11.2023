import DefaultImg from "../DefaultImg/DefaultImg";
import DefaultTitle from "../DefaultTitle/DefaultTitle";
import PhotoMe from "../../assets/PhotoMe.svg"

export default function AboutMe() {
    return (
        <>
            <div className="about_me">
                <DefaultTitle text="About" oreangetext="Me"/>
                <DefaultImg src={PhotoMe} alt="Foto do autor" />
            </div>
        </>
    )
}