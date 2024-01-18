import GlobalNav from './GlobalNav';
import './Header.css';

function Header({ setPage }) {

    return (
        <header className='header'>
            <a className='skip-link' href='#main'>Skip to content</a>
            <a className='header__logo' href='#' onClick={(e) => {e.preventDefault(); setPage('HomePage');}}>Rui Lu</a>
            <GlobalNav setPage={setPage} />
        </header>
    );
}

export default Header;