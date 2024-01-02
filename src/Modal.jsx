import Button from './Button';
import './Modal.css';

function Modal({ modalRef, content }) {
    return (
        <dialog className='modal' ref={modalRef}>
            <div className='modla__content'>
                {content}
                <Button className='modal__button' onClick={() => modalRef.current.close()}>Close</Button>
            </div>

        </dialog>
    );
}

export default Modal;
