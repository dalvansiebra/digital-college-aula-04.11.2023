import DefaultTitle from "../../components/DefaultTitle/DefaultTitle";
import "./MySkills.css"

export default function MySkills() {

    const data = [
        { item: "HTML-5", percent: 50 },
        { item: "CSS-3", percent: 70 },
        { item: "Boostrap", percent: 0 },
        { item: "JavaScript", percent: 0 },
        { item: "Adobe Photoshop", percent: 0 },
        { item: "Adobe Illustrator", percent: 0 }
    ];

    return (
        <>
            <div className="my_skills">
                <DefaultTitle text="My" oreangetext="Skills" />
                <div className="skills">
                    <ul>
                        {data.map((item) => {
                            return (
                                <li>
                                    <div className="name">
                                        {item.item}
                                    </div>

                                    <div className="percent_base">
                                        <div className="percent" style={{ width: `${item.percent}%` }}></div>
                                    </div>

                                    <div className="percent-num">
                                        {item.percent}%
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}