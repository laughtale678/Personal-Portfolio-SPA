import './GlobalNav.css';
import Button from './Button';
import { useState } from 'react';
function GlobalNav({ setPage, mode, setMode }) {
    const [showMenu, setShowMenu] = useState(false);
    const showMenuClass = showMenu ? '' : 'menu--hidden';
    function go(event, page) {
        event.preventDefault();
        setPage(page);
    }

    function change() {
        if (mode == '') {
            setMode('dark');
        } else {
            setMode('');
        }
    }
    return (
        <nav className='navigation'>
            <div className='nav__buttoons'>
                <Button className='hamburger-button' type='button' aria='hamburger button' onClick={() => setShowMenu(!showMenu)}>&#9776;</Button>
                <Button className='darkmode-button' type='button' aria='darkmode button' onClick={() => change()}><i className="gg-dark-mode"></i></Button>
            </div>

            <ul className={`menu ${showMenuClass}`} onClick={() => setShowMenu(false)}>
                <li className='menu__item'><a className='menu__link'
                    href='#' onClick={(e) => go(e, 'HomePage')}>Home</a></li>
                <li className='menu__item'><a className='menu__link'
                    href='#' onClick={(e) => go(e, 'AboutPage')}>About</a></li>
                <li className='menu__item'><a className='menu__link'
                    href='#' onClick={(e) => go(e, 'ProjectsPage')}>Projects</a></li>
                <li className='menu__item'><a className='menu__link'
                    href='#' onClick={(e) => go(e, 'ContactPage')}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default GlobalNav;