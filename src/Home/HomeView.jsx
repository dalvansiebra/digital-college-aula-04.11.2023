import Header from "../components/Header/Header"
import Banner from "../Views/Banner/Banner"
import AboutMe from "../Views/AboutMe/AboutMe"
import MyServices from "../Views/MyServices/MyServices"
import MySkills from "../Views/MySkills/MySkills"

function HomeView () {
    return (
        <>
            <Header/>
            <Banner/>
            <AboutMe/>
            <MyServices/>
            <MySkills/>
        </>
    )
}

export default HomeView