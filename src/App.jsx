import './App.css'
import { PortfolioContext } from './PortfolioContext'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home1 from './pages/Home/Home1';
import Home2 from './pages/Home/Home2';
import Home3 from './pages/Home/Home3';
import Projects1 from './pages/Projects/Projects1';
import Projects2 from './pages/Projects/Projects2';
import Projects3 from './pages/Projects/Projects3';
import Contact1 from './pages/Contact/Contact1';
import Contact2 from './pages/Contact/Contact2';
import Contact3 from './pages/Contact/Contact3';
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
          <nav>
            <div className='logo-area-secondary'>
              <p>Logo area test</p>
            </div>
            <ul>
              <li>
                <div className={getClass('Home')} onClick={() => {changeClass("Home")}}>
                  <Link to="/"><p>Home</p></Link>
                </div>
              </li>
              <li>
                <div className={getClass('Projects')} onClick={() => {changeClass("Projects")}}>
                  <Link to="/projects"><p>Projects</p></Link>
                </div>
              </li>
                <div className={getClass('Contact')} onClick={() => {changeClass("Contact")}}>
                  <Link to="/contact"><p>Contact</p></Link>
                </div>
              <li>
                <div className={getClass('GitHub')}>
                  <p><a href="https://github.com/JohnsonHarleyR" target="_blank">GitHub</a></p>
                </div>
              </li><li>
                <div className={getClass('LinkedIn')}>
                <p><a href="https://www.linkedin.com/in/johnsonharleyr" target="_blank">LinkedIn</a></p>
                </div>
              </li><li>
                <div className={getClass('Resume')}>
                <p><a href="src/assets/resume.pdf" target="_blank">Resume</a></p>
                </div>
              </li><li>

              </li>
            </ul>
          </nav>
        </header>
        {/* Main area under the header on desktop */}
        <div className='container1'>
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/projects" element={<Projects1 />} />
            <Route path="/contact" element={<Contact1 />} />
          </Routes>
        </div>
        {/* Cerulean area on the left side for desktop */}
        <div className='container2'>
          <div className='logo-area-primary'>
            <p>Logo area test</p>
          </div>
          <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/projects" element={<Projects2 />} />
            <Route path="/contact" element={<Contact2 />} />
          </Routes>
        </div>
        {/* Light blue area below main area */}
        <div className='container3'>
          <Routes>
            <Route path="/" element={<Home3 />} />
            <Route path="/projects" element={<Projects3 />} />
            <Route path="/contact" element={<Contact3 />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
