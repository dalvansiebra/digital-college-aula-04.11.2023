import Banner from "../Views/Banner/Banner"
import AboutMe from "../Views/AboutMe/AboutMe"
import MyServices from "../Views/MyServices/MyServices"
import MySkills from "../Views/MySkills/MySkills"
import Portfolio from "../Views/Portfolio/Portfolio"
import Contact from "../Views/Contact/Contact"
import Dashboard from "../Views/Dashboard/Dashboard"

function HomeView() {
    return (
        <>
            <Banner />
            <AboutMe />
            <MyServices />
            <MySkills />
            <Dashboard />
            <Portfolio />
            <Contact />
        </>
    )
}

export default HomeView