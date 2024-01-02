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
            <li>Created an ecosystem supporting multi-organization, multi-role, and multi-account login for seamless operations.</li>
            <li>Utilized hierarchical structure to ensure efficient transfer of work requests within and across organizations.</li>
            <li>Employed Object-Oriented Programming principles for robust system design and implementation.</li>
        </ul>
    );
    const modalContent2 = (
        <ul>
            <li>Delivered a food ordering system within 1 month by collaborating with 2 developers.</li>
            <li>Developed order detail display modules and used Pandas and Matplotlib to analyze and visualize sales data.</li>
            <li>Tested and debugged to ensure a reliable and error-free system.</li>
        </ul>
    );
    const modalContent3 = (
        <ul>
            <li>Developed a personal website using React, showcasing my skills and projects.</li>
            <li>Ensured a responsive design to adapt seamlessly across various devices and screen sizes.</li>
            <li>Prioritized accessibility features to provide an inclusive and user-friendly experience for all visitor</li>
        </ul>
    );
    return (
        <div className='projects-page'>
            <h1 className='projects__title'>Projects</h1>

            <Card
                title='Food-Ordering'
                pic='./project1.png'
                alt='food ordering system order food page'
                text='Nationwide vaccine inventory management and distribution system built in Java.'
                go={() => projectRef1.current.showModal()}
            />
            <Card
                title='Vaccine-Distribution'
                pic='./project2.png'
                alt='Vaccine-Distribution-System admin page'
                text='Python-based system for businesses to place orders and manage all sales data.'
                go={() => projectRef2.current.showModal()}
            />
            <Card
                title='Personal-Website'
                pic='./project3.png'
                alt='Personal Website home page'
                text='React-based personal website to introduce background, experiences and projects'
                go={() => projectRef3.current.showModal()}
            />
            <Modal modalRef={projectRef1} content={modalContent1} />
            <Modal modalRef={projectRef2} content={modalContent2} />
            <Modal modalRef={projectRef3} content={modalContent3} />
        </div>

    );
}

export default ProjectsPage;