import Header from "../components/Header/Header"
import Banner from "../Views/Banner/Banner"
import AboutMe from "../Views/AboutMe/AboutMe"
import MyServices from "../Views/MyServices/MyServices"

function HomeView () {
    return (
        <>
            <Header/>
            <Banner/>
            <AboutMe/>
            <MyServices/>
        </>
    )
}

export default HomeView