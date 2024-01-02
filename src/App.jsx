import './App.css';
import { useState } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import Contactpage from './ContactPage';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';
import Footer from './Footer';


function App() {
  const [page, setPage] = useState('HomePage');
  const [mode, setMode] = useState('');

  return (
    <div className={`app ${mode}`}>
      <Header setPage={setPage} mode={mode} setMode={setMode} />
      <div id='main'>
        {(page === 'HomePage') && <HomePage setPage={setPage} />}
        {(page === 'ContactPage') && <Contactpage />}
        {(page === 'ProjectsPage') && <ProjectsPage />}
        {(page === 'AboutPage') && <AboutPage />}

      </div>
      <Footer />

    </div>
  )
}

export default App;
