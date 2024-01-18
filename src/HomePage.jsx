import "./HomePage.css";

function HomePage({ setPage }) {
  return (
    <div className="home">
      <div className="home__image-container">
        <img
          className="home__image"
          src="./home.png"
          alt="Rui Lu profile picture"
        />
      </div>
      <div className="home__content">
        <p className="home__hello">Hello, I'm</p>
        <h1 className="home__name">Rui Lu</h1>
        <p className="home__text">Full Stack Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={() => window.location.href = 'Resume.pdf'}>Download CV</button>
          <a className="btn btn-color-1" href="#" onClick={(e) => { e.preventDefault(); setPage('AboutPage'); }}>About me</a>
        </div>
        <div className="socials-container">
          <a
            href="https://www.linkedin.com/in/rui-lu-76ba9425b/"
            target="_blank"
          >
            <img
              src="linkedin.png"
              alt="My LinkedIn profile"
              className="socials-icon"
            />
          </a>
          <a href="https://github.com/laughtale678" target="_blank">
            <img
              src="github.png"
              alt="My Github profile"
              className="socials-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
