import DefaultTitle from "../../components/DefaultTitle/DefaultTitle";
import PhoneIcon from "../../assets/PhoneIcon.svg"
import MailIcon from "../../assets/MailIcon.svg"
import LocationArrowIcon from "../../assets/LocationArrowIcon.svg"
import "../Contact/Contact.css"

export default function Contact() {
    return (
        <>
            <div className="contact">
                <DefaultTitle text="Contact" />
                <div className="contact_content">
                    <div className="contact_info">
                        <ul>
                            <li>
                                <img src={PhoneIcon} alt="PhoneIcon"/>
                                <h1>+8801863-931220</h1>
                                <h1>+8801567-953483</h1>
                            </li>
                            <li>
                                <img src={MailIcon} alt="MailIcon"/>
                                <h1>mdriead.bd@gmail.com</h1>
                            </li>
                            <li>
                                <img src={LocationArrowIcon} alt="LocationArrowIcon"/>
                                <h1>Zirabo, Ashulia, Savar, Dhaka</h1>
                            </li>
                        </ul>
                    </div>
                    <div className="contact_form">
                        <form action="">

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}