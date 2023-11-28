import "../MyServices/MyServices.css"
import DefaultCard from "../../components/DefaultCard/DefaultCard";
import DefaultTitle from "../../components/DefaultTitle/DefaultTitle";
import ComputerVector from "../../assets/ComputerVector.svg"
import PhoneVector from "../../assets/PhoneVector.svg"
import DataVector from "../../assets/DataVector.svg"

export default function MyServices() {
    return (
        <>
            <div className="my_services">
                <DefaultTitle text="My" oreangetext="Services" />
                <div className="card_my_services">
                    <DefaultCard
                        src={ComputerVector}
                        alt="ComputerVector"
                        titleTexrCard="Web Development"
                        paragrafoTextCard="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
                    />
                    <DefaultCard
                        src={PhoneVector}
                        alt="PhoneVector"
                        titleTexrCard="Apps Development"
                        paragrafoTextCard="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
                    />
                    <DefaultCard
                        src={DataVector}
                        alt="DataVector"
                        titleTexrCard="Digital Marketing"
                        paragrafoTextCard="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
                    />
                </div>
            </div>
        </>
    )
}