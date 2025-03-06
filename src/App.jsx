import './style/App.css'
import "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Content from "./components/Content.jsx";

function App() {
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
