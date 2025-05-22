import './style/App.css'
import "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Content from "./components/Content.jsx";
import {useEffect} from "react";
import 'aos/dist/aos.css';
import AOS from "aos";

function App() {
    useEffect(() => {
        AOS.init({duration: 700, ease: "ease-out"});
    }, []);
    return (
    <>
        <div className="d-flex flex-column justify-content-around min-vh-100 p-0 m-0">
            <Header />
            <Content />
            <Footer />
        </div>
    </>
  )
}

export default App
