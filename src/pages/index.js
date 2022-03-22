import * as React from "react"
import { Header, Reasons, Download, Update, Footer, Contact } from "../sections"
import "../styles/App.scss";

// styles

const App = () => {
  return (
    <div className="App">
      <Header />
      <Reasons />
      <Download />
      <Update />
      <Contact />
      <Footer />
    </div>

  )
}

export default App
