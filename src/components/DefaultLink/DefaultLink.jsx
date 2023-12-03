import { Link } from "react-router-dom";

export default function DefaultLink ({ to, text , target }) {
    return (
    <>
        <Link to={to} target={target}>{text}</Link>
    </>    
    )
}