import DefaultImg from "../DefaultImg/DefaultImg";

export default function DefaultCard({ src , alt , titleTexrCard , paragrafoTextCard }) {
    return (
        <>
            <div className="card">
                <DefaultImg src={src} alt={alt} />
                <h1>{titleTexrCard}</h1>
                <p>{paragrafoTextCard}</p>    
            </div>
        </>
    )
}