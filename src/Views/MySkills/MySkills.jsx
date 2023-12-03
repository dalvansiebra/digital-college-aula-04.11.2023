import DefaultTitle from "../../components/DefaultTitle/DefaultTitle";
import "./MySkills.css"

export default function MySkills() {

    const data = [
        { item: "HTML-5", percent: 80 },
        { item: "CSS-3", percent: 75 },
        { item: "Boostrap", percent: 60 },
        { item: "JavaScript", percent: 50 },
        { item: "Adobe Photoshop", percent: 75 },
        { item: "Adobe Illustrator", percent: 60 }
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
                                    <div>
                                        {item.item}
                                    </div>

                                    <div className="percent_base">
                                        <div className="percent" style={{ width: `${item.percent}%` }}></div>
                                    </div>

                                    <div>
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