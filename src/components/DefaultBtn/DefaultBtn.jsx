export default function DefaultBtn ( { type , style , text } ) {
    return (
        <>
            <button type={type} className={style}> {text} </button>
        </>
    )
}