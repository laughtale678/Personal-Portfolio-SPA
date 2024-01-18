import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about">
      <h1 className="title">About Me</h1>
      <div className="about__content">
        <div className="about__pic-container">
          <img src="about.png" alt="Profile picture" className="about-pic" />
        </div>
        <div className="text-container">
          <p className="about__text">
            Computer Software Engineering graduate student at Northeastern
            University with a background as a product manager in the banking
            industry. Experienced in agile development methodologies and
            collaborations with cross-functional teams. Pursuing opportunities
            as a Software Engineer to continue professional growth and apply
            strong analytical abilities, problem-solving skills, and passion for
            creating innovative software solutions.
          </p>
          <p className="about__skills">
            <strong>Technical Skills:</strong> 
          </p>
          <ul className="skills">
              <li><strong>Languages: </strong>Java, JavaScript, Python, HTML5, CSS3, SQL.</li>
              <li><strong>Frameworks&Libraries: </strong> React, Spring Boot, Node.js, Express.js, Redux, Tailwind CSS, Java Swing.</li>
              <li><strong>Tools: </strong> Git, GitHub, MongoDB, MySQL, AWS.</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
