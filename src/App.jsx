import './App.css';
import { useState } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import Contactpage from './ContactPage';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';
import Footer from './Footer';
import ExperiencePage from './ExperiencePage';

function App() {
  const [page, setPage] = useState('HomePage');

  return (
    <div className='app'>
      <Header setPage={setPage}/>
      <div id='main'>
        {(page === 'HomePage') && <HomePage setPage={setPage} />}
        {(page === 'AboutPage') && <AboutPage />}
        {(page === 'ExperiencePage') && <ExperiencePage />}
        {(page === 'ProjectsPage') && <ProjectsPage />}
        {(page === 'ContactPage') && <Contactpage />}
      </div>
      <Footer />

    </div>
  )
}

export default App;
