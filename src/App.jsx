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
import { Button, Input } from '@chakra-ui/react'

function App() {

  const {currentPage, setCurrentPage} = useContext(PortfolioContext);

  function changeClass(linkName) {
    setCurrentPage(linkName);
  }

  function getClass(linkName) {
    let classN = linkName === currentPage ? 'header-link current' : 'header-link';
    return classN;
  }

  function getContainer2(areaType = "primary") {
    console.log('getContainer2 areaType: ', areaType);
    return (
      <div className={`container2 ${areaType}`}>
          <div className={`logo-area primary`}>
            <p>Logo area test</p>
          </div>
          <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/projects" element={<Projects2 />} />
            <Route path="/contact" element={<Contact2 />} />
          </Routes>
      </div>
    );
  }

  return (
    <main>
      <Router>
        {/* Cerulean area on the left side for desktop */}
        {getContainer2('primary')}
        <section className="right-area">
          <div className="container1">
            <header>
            <div className='logo-area secondary'>
                      <p>Logo area test</p>
                    </div>
              <nav>
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
                  </li>
                </ul>
              </nav>
            </header>
            {/* Put container2 here if the screen is a portrait or on mobile */}
            {getContainer2('secondary')}
            {/* Main area under the header on desktop */}
            <div>
              <Routes>
                <Route path="/" element={<Home1 />} />
                <Route path="/projects" element={<Projects1 />} />
                <Route path="/contact" element={<Contact1 />} />
              </Routes>
            </div>
          </div>
          
          
          {/* Light blue area below main area */}
          <div className='container3'>
            <Button colorScheme={"blue"}>Chakra Button</Button>
            <input placeholder="test" />
            <Input placeholder="test"/>
            <Routes>
              <Route path="/" element={<Home3 />} />
              <Route path="/projects" element={<Projects3 />} />
              <Route path="/contact" element={<Contact3 />} />
            </Routes>
          </div>

        </section>
        
      </Router>
    </main>
  )
}

export default App
