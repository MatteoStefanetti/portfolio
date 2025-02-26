import './App.css'
import "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Content from "./Content.jsx";

function App() {
    return (
    <>
        <div className="d-flex flex-column min-vh-100 p-0 m-0">
            <Header />
            <main className="flex-fill">
                <Content />
            </main>
            <Footer />
        </div>
    </>
  )
}

export default App
