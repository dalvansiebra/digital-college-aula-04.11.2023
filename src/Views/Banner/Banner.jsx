import BannerText from "../../components/Banner/BannerText";
import "../AppBanner/BannerStyle.css"
import DefaultImg from "../../components/DefaultImg/DefaultImg";
import BannerImage from "../../assets/computerdesign.png"

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