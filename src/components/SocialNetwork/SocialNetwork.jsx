import "./SocialNetwork.css"

export default function SocialNetwork ( { src , alt , href } ) {
    return (
        <>
            <div>
                <a href={href}>
                    <img src={src} alt={alt} />
                </a>
            </div>
        </>    
    )
}