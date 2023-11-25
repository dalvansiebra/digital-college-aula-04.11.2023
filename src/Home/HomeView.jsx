import AboutMe from "../Views/AboutMe/AboutMe"
import Banner from "../Views/Banner/Banner"
import Header from "../components/Header/Header"




function HomeView () {
    return (
        <>
            <Header/>
            <Banner/>
            <AboutMe/>
        </>
    )
}

export default HomeView