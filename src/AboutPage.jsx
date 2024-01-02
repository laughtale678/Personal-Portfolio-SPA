import './AboutPage.css';
import Button from './Button'
import { useState } from 'react';

function AboutPage() {
    const [content, setContent] = useState('education');

    function Education() {
        return (
            <>
                <div>
                    <p className='experience__title'>Master of Computer Software Engineering</p>
                    <p>Northeastern University, Seattle, WA</p>
                    <p>2023.01 - Expected 2025.05</p>

                </div>
                <div>
                    <p className='experience__title'>Bachelor of Science in Economics</p>
                    <p>Nanjing Audit University, Nanjing, China</p>
                </div>

            </>

        );
    }

    function Work() {
        return (
            <>
                <div>
                    <p className='experience__title'>Jiangsu Jiangnan Rural Commercial Bank</p>
                    <p>Product Manager</p>
                    <p>2021.06 - 2022.12</p>
                </div>
                <div>
                    <p className='experience__title'>Jiangsu Jiangnan Rural Commercial Bank</p>
                    <p>Customer Manager</p>
                    <p>2016.01-2021.05</p>
                </div>

            </>
        );
    }
    function Skills() {
        return (
            <>
                <div>
                    <p className='experience__title'>Languages:</p>
                    <p>Java, JavaScript, Python, HTML, CSS.</p>
                </div>
                <div>
                    <p className='experience__title'>Libraries and Tools: </p>
                    <p>React, Spring Boot, Pandas, Matplotlib.</p>
                </div>
                <div>
                    <p className='experience__title'>Tools:</p>
                    <p> Git, GitHub.</p>

                </div>

            </>
        );
    }


    return (
        <div className='about'>
            <h1 className='about__title'>About</h1>
            <div className='about__content'>
                <img className='about__img' src="./about.png" alt="northeastern seattle campus" />
                <div className='about__main'>
                    <div className='about__tab' aria-label='tablist' >
                        <Button aria='educationTab' className={`about__button ${content === 'education' ? 'active' : ''}`} onClick={() => setContent('education')}>Education</Button>
                        <Button aria='workTab' className={`about__button ${content === 'work' ? 'active' : ''}`} onClick={() => setContent('work')}>Work</Button>
                        <Button aria='skillsTab' className={`about__button ${content === 'skills' ? 'active' : ''}`} onClick={() => setContent('skills')}>Skills</Button>
                    </div>
                    <div className='about__experience'>
                        {content == 'education' && <Education />}
                        {content == 'work' && <Work />}
                        {content == 'skills' && <Skills />}
                    </div>

                </div>

            </div>
        </div>
    );
}
export default AboutPage;