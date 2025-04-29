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
import { useContext, useState } from 'react';
import { Button, CloseButton, Drawer, Portal  } from '@chakra-ui/react'
import barsIcon from './images/bars-icon.png';
import resume from './assets/resume.pdf';

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const {currentPage, setCurrentPage} = useContext(PortfolioContext);

  function clickDrawerLink() {
    setOpenDrawer('false');
  }

  function changeClass(linkName) {
    setCurrentPage(linkName);
  }

  function getClass(linkName, extra = null) {
    let className = linkName === currentPage ? 'header-link current' : 'header-link';
    
    if (extra !== null) {
      className += ` ${extra}`
    }
    return className;
  }
  
  function openResume() {
    window.open(resume, '_blank');
  };

  function getLogoArea(areaType) {
    return (
        <div className={`logo-area ${areaType}`}>
          <p>Logo area test</p>
        </div>
    );
  }

  function getContainer2(areaType = "primary") {
    return (
      <div className={`container2 ${areaType}`}>
          {getLogoArea('primary')}
          <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/projects" element={<Projects2 />} />
            <Route path="/contact" element={<Contact2 />} />
          </Routes>
      </div>
    );
  }

  function getNavArea(className) {

    let contactClassName = className === 'primary' ? getClass('Contact', 'right-divider') :getClass('Contact');

    const doOnClick = (onLinkPress) => {

      //Only close the drawer if the it's not a primary nav
      let shouldCloseDrawer = className === 'secondary';

      // do the function that was passed first
      onLinkPress();

      // if the drawer should close, then close the drawer
      if (shouldCloseDrawer) {
        setOpenDrawer(false);
      }

    }

    return (
      <nav className={className}>
        <ul>
          <li>
            <div className={getClass('Home')} onClick={() => {doOnClick(() => {changeClass("Home")})}}>
              <Link to="/"><p>Home</p></Link>
            </div>
          </li>
          <li>
            <div className={getClass('Projects')} onClick={() => {doOnClick(() => {changeClass("Projects")})}}>
              <Link to="/projects"><p>Projects</p></Link>
            </div>
          </li>
          <li>
            <div className={contactClassName} onClick={() => {doOnClick(() => {changeClass("Contact")})}}>
              <Link to="/contact"><p>Contact</p></Link>
            </div>
          </li>
          <li>
            <div className={getClass('Resume', 'dark')}>
              <p className="resume-link">
                <a onClick={() => {doOnClick(() => {openResume()})}} target="_blank">Resume</a>
              </p>
            </div>
          </li>
          <li>
            <div className={getClass('GitHub', 'dark')}>
              <p><a href="https://github.com/JohnsonHarleyR" target="_blank" onClick={() => {doOnClick(() => {})}}>GitHub</a></p>
            </div>
          </li>
          <li>
            <div className={getClass('LinkedIn', 'dark')}>
            <p><a href="https://www.linkedin.com/in/johnsonharleyr" target="_blank"  onClick={() => {doOnClick(() => {})}}>LinkedIn</a></p>
            </div>
          </li>
        </ul>
      </nav>
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
              {getLogoArea('secondary')}

              {/* Make an empty box replace the logo area if the logo is gone - helps with alignment */}
              <div className={'secondary-logo-replacement'}></div>

              {/* Default nav */}
              {getNavArea('primary')}

              {/* mobile nav */}
              <div className="secondary-nav">
                <Drawer.Root open={openDrawer} onOpenChange={(e) => setOpenDrawer(e.open)}>
                  <Drawer.Trigger asChild>
                    <button className="menu-button">
                      {/* <HamburgerIcon color="white" /> */}
                      <img className="menu-icon" src={barsIcon} />
                    </button>
                  </Drawer.Trigger>
                  <Portal className="drawer-area">
                    <Drawer.Backdrop />
                    <Drawer.Positioner>
                      <Drawer.Content>
                        <Drawer.Header className="drawer-background">
                          <Drawer.Title className="drawer-title">Navigation</Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body className="drawer-background">
                          {getNavArea("secondary")}
                        </Drawer.Body>
                        <Drawer.CloseTrigger asChild>
                          <CloseButton  className="menu-button" size="md" />
                        </Drawer.CloseTrigger>
                      </Drawer.Content>
                    </Drawer.Positioner>
                  </Portal>
                </Drawer.Root>
              </div>

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
          {/* <div className='container3'>
            <Routes>
              <Route path="/" element={<Home3 />} />
              <Route path="/projects" element={<Projects3 />} />
              <Route path="/contact" element={<Contact3 />} />
            </Routes>
          </div> */}

        </section>
        
      </Router>
    </main>
  )
}

export default App
