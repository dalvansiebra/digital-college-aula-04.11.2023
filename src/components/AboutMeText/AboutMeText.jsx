import { useEffect, useState } from "react";
import DefaultBtn from "../DefaultBtn/DefaultBtn";

export default function AboutMeText() {

    const [aboutInfo, setAboutInfo] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/about')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setAboutInfo(data);
        })
    },[])

    return (
        <>
            <div className="about_me_text">
                <h2>{aboutInfo.title}</h2>
                <p>{aboutInfo.primeiroParagrafo}</p>
                <p>{aboutInfo.segundoParagrafo}</p>
                <DefaultBtn text="Read More..." onClick="" type="submit"/>
            </div>
        </>
    )
}