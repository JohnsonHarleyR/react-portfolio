import './App.css'
import { PortfolioContext } from './PortfolioContext'
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects';
import { useContext } from 'react';

function App() {

  const {currentPage, setCurrentPage} = useContext(PortfolioContext);

  function changeClass(linkName) {
    setCurrentPage(linkName);
  }

  function getClass(linkName) {
    let classN = linkName === currentPage ? 'header-link current' : 'header-link';
    return classN;
  }

  return (
      <Router>
        <header>
          <div className='logoHead'>
            {/* <img src={logo} alt="Cinemood Logo" className="logo" /> */}
            {/* <h1 className='headertitle'>CINEMOOD</h1> */}
          </div>
          <nav>
            <ul>
              <li>
                <div className={getClass('Home')} onClick={() => {changeClass("Home")}}>
                  <Link to="/"><p>Home</p></Link>
                </div>
                <div className={getClass('Projects')} onClick={() => {changeClass("Projects")}}>
                  <Link to="/projects"><p>Projects</p></Link>
                </div>
              </li>

            </ul>
          </nav>
        </header>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
