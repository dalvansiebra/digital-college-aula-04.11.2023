import DefaultTitle from "../../components/DefaultTitle/DefaultTitle";
import PhoneIcon from "../../assets/PhoneIcon.svg"
import MailIcon from "../../assets/MailIcon.svg"
import LocationArrowIcon from "../../assets/LocationArrowIcon.svg"
import "../Contact/Contact.css"
import DefaultBtn from "../../components/DefaultBtn/DefaultBtn";

export default function Contact() {
    return (
        <>
            <div className="contact">
                <DefaultTitle text="Contact" />
                <div className="contact_content">
                    <div className="contact_info">
                        <ul>
                            <li>
                                <img src={PhoneIcon} alt="PhoneIcon" />
                                <div>
                                    <h1>+8801863-931220</h1>
                                    <h1>+8801567-953483</h1>
                                </div>
                            </li>
                            <li>
                                <img src={MailIcon} alt="MailIcon" />
                                <h1>mdriead.bd@gmail.com</h1>
                            </li>
                            <li>
                                <img src={LocationArrowIcon} alt="LocationArrowIcon" />
                                <h1>Zirabo, Ashulia, Savar, Dhaka</h1>
                            </li>
                        </ul>
                    </div>
                    <div className="contact_form">
                        <form action="">
                            <div>
                                <input type="text" name="" id="" placeholder="Full Name" />
                            </div>
                            <div>
                                <input type="email" name="" id="" placeholder="Email Address" />
                            </div>
                            <div className="half_size">
                                <input className="input_half_size" type="number" name="" id="" placeholder="Phone Number" />
                                <input className="input_half_size" type="text" name="" id="" placeholder="Subject" />
                            </div>
                            <div >
                                <input className="input_text_area" type="text" name="" id="" placeholder="Your Message" />
                            </div>
                            <div className="input_text_area">
                                <DefaultBtn text="Send" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}