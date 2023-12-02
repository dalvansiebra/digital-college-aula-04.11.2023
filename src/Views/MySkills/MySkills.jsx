import DefaultTitle from "../../components/DefaultTitle/DefaultTitle";
import "./MySkills.css"

export default function MySkills() {
    return (
        <>
            <div className="my_skills">
                <DefaultTitle text="My" oreangetext="Skills" />
                <div className="table_skills">
                    <table>
                        <tr>
                            <td>HTML-5</td>
                            <div className="input_box"><input type="" name="" id="" /></div>
                            <h1>80%</h1>
                        </tr>
                        <tr>
                            <td>CSS-3</td>
                            <div className="input_box"><input type="" name="" id="" /></div>
                            <h1>80%</h1>
                        </tr>
                        <tr>
                            <td>Boostrap</td>
                            <div className="input_box"><input type="" name="" id="" /></div>
                            <h1>80%</h1>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <div className="input_box"><input type="" name="" id="" /></div>
                            <h1>80%</h1>
                        </tr>
                        <tr>
                            <td>Adobe Photoshop</td>
                            <div className="input_box"><input type="" name="" id="" /></div>
                            <h1>80%</h1>
                        </tr>
                        <tr>
                            <td>Adobe Illustrator</td>
                            <div className="input_box"><input type="" name="" id="" /></div>
                            <h1>80%</h1>
                        </tr>

                    </table>
                </div>
            </div>
        </>
    )
}