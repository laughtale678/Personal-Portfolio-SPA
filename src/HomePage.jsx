import './HomePage.css';

function HomePage({ setPage }) {
    return (
        <div className='home'>
            <div className='home__content'>
                <h1 className='home__title'>Hi, I'm Rui(Ray) Lu</h1>
                <p className='home__text'>Computer Software Engineering graduate student at Northeastern University. Experienced in agile development methodologies and collaborations with crossfunctional
                    teams. Pursuing opportunities as a Software Engineer to continue professional growth and apply strong
                    analytical abilities, problem-solving skills, and passion for creating innovative software solutions.</p>
                <a className='home__button' href="#" onClick={(e) => { e.preventDefault(); setPage('AboutPage'); }}>About Me</a>
            </div>
            <img className='home__image' src='./home.png' alt="Rui Lu in the mountain" />
        </div>
    );
}

export default HomePage;