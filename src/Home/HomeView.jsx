import Banner from "../Views/Banner/Banner"
import AboutMe from "../Views/AboutMe/AboutMe"
import MyServices from "../Views/MyServices/MyServices"
import MySkills from "../Views/MySkills/MySkills"
import Portfolio from "../Views/Portfolio/Portfolio"

function HomeView () {
    return (
        <>
            <Banner/>
            <AboutMe/>
            <MyServices/>
            <MySkills/>
            <Portfolio/>
        </>
    )
}

export default HomeView