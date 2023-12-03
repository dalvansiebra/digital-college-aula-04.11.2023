import DefaultLink from "../../components/DefaultLink/DefaultLink"
import DefaultTitle from "../../components/DefaultTitle/DefaultTitle"
import ProjectXVector from "../../assets/ProjectXVector.svg"
import "../Portfolio/Portfolio.css"

export default function Portfolio() {
    return (
        <>
            <div className="portfolio">
                <DefaultTitle text="Portfólio" />
                <div className="portfolio_gallery">
                    <DefaultLink to="#" target="_blank" text={<><img src={ProjectXVector} alt="ProjectXVector" /></>} />
                    <DefaultLink to="#" target="_blank" text={<><img src={ProjectXVector} alt="ProjectXVector" /></>} />
                    <DefaultLink to="#" target="_blank" text={<><img src={ProjectXVector} alt="ProjectXVector" /></>} />
                    <DefaultLink to="#" target="_blank" text={<><img src={ProjectXVector} alt="ProjectXVector" /></>} />
                    <DefaultLink to="#" target="_blank" text={<><img src={ProjectXVector} alt="ProjectXVector" /></>} />
                    <DefaultLink to="#" target="_blank" text={<><img src={ProjectXVector} alt="ProjectXVector" /></>} />
                    <DefaultLink to="#" target="_blank" text={<><img src={ProjectXVector} alt="ProjectXVector" /></>} />
                    <DefaultLink to="#" target="_blank" text={<><img src={ProjectXVector} alt="ProjectXVector" /></>} />
                </div>

            </div>
        </>
    )
}