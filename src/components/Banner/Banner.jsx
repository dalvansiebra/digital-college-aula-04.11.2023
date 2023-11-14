import BannerText from "./BannerText";
import "../Banner/BannerStyle.css"
import DefaultImg from "../DefaultImg/DefaultImg";
import BannerImage from "../../assets/BannerImage.svg"

export default function Banner () {
    return (
        <>
            <div className="banner">
                <BannerText/>
                <DefaultImg className="banner_image" src={BannerImage} alt="Banner Image" />
            </div>
        </>    
    )
}