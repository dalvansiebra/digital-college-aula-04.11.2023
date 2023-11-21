export default function DefaultBtn ( { type , style , text , onClick="" }) {
    return (
        <>
            <button type={type} onClick={onClick} className={style}> {text} </button>
        </>
    )
}