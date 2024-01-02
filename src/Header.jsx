import GlobalNav from './GlobalNav';
import './Header.css';

function Header({ setPage, mode, setMode }) {

    return (
        <header className='header'>
            <a className='skip-link' href='#main'>Skip to content</a>
            <a className='header__logo' href='#' onClick={(e) => {e.preventDefault(); setPage('HomePage');}}>Rui Lu</a>
            <GlobalNav setPage={setPage} mode={mode} setMode={setMode} />
        </header>
    );
}

export default Header;