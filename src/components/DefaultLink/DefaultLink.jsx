export default function DefaultLink ({ href, text, target }) {
    return (
    <>
        <a href={href} target={target}>{text}</a>
    </>    
    )
}