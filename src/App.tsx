import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { GlobalStyle } from './styles/global';
import { Home } from "./Pages/Home";

function App() {

  return (
    <>
       <GlobalStyle/>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
