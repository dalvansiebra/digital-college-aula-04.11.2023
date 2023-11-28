import "../Banner/BannerStyle.css"
import BannerImage from "../../assets/computerdesign.png"
import BannerText from "../../components/BannerText/BannerText"
import DefaultImg from "../../components/DefaultImg/DefaultImg"

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