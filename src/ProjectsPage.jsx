import './ProjectsPage.css';
import Card from './Card';
import { useRef } from 'react';
import Modal from './Modal';


function ProjectsPage() {
    const projectRef1 = useRef();
    const projectRef2 = useRef();
    const projectRef3 = useRef();
    const modalContent1 = (
        <ul>
            <li>Implemented advanced authentication with JWT, Firebase, and Google OAuth for enhanced security.</li>
            <li>Utilized Redux for state management, ensuring consistency and effi ciency in component states.</li>
            <li>Built a user-friendly interface using React and styled with Tailwind CSS, emphasizing responsive design and accessibility.</li> 
            <li>Enabled real-time CRUD operations using RESTful API with JSON data format, ensuring effi cient and secure interaction.</li> 
        </ul>
    );
    const modalContent2 = (
        <ul>
            <li>Created an ecosystem supporting multi-organization, multi-role, and multi-account login for seamless operations.</li>
            <li>Utilized hierarchical structure to ensure efficient transfer of work requests within and across organizations.</li>
            <li>Employed Object-Oriented Programming principles for robust system design and implementation.</li>
        </ul>
    );
    const modalContent3 = (
        <ul>
            <li>Developed a personal website using React, showcasing my skills and projects.</li>
            <li>Ensured a responsive design to adapt seamlessly across various devices and screen sizes.</li>
            <li>Prioritized accessibility features to provide an inclusive and user-friendly experience for all visitor.</li>
        </ul>
    );
    return (
        <div className='projects-page'>
            <h1 className='projects__title'>Projects</h1>

            <Card
                title='UniRentFinder Web App'
                pic='./project1.png'
                alt='UniRentFinder Web home page'
                text='UniRentFinder is a website designed specifically for university students, aiming to facilitate the sharing of rental and subletting information.'
                go={() => projectRef1.current.showModal()}
            />
             <Card
                title='Personal-Website SPA'
                pic='./project3.png'
                alt='Personal Website home page'
                text='React-based personal website to introduce background, experiences and projects'
                go={() => projectRef3.current.showModal()}
            />
            <Card
                title='Vaccine-Distribution'
                pic='./project2.png'
                alt='Vaccine-Distribution-System admin page'
                text='Nationwide vaccine inventory management and distribution system built in Java.'
                go={() => projectRef2.current.showModal()}
            />
           
            <Modal modalRef={projectRef1} content={modalContent1} />
            <Modal modalRef={projectRef2} content={modalContent2} />
            <Modal modalRef={projectRef3} content={modalContent3} />
        </div>

    );
}

export default ProjectsPage;