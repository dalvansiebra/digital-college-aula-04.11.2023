import BannerText from "./BannerText";
import "../Banner/BannerStyle.css"
import DefaultImg from "../DefaultImg/DefaultImg";
import BannerImage from "../../assets/BannerImage.svg"

export default function Banner () {
    return (
        <>
            <div className="banner">
                <BannerText/>
                <section className="banner_image">
                <DefaultImg src={BannerImage} alt="Banner Image" />
                </section>
            </div>
        </>    
    )
}