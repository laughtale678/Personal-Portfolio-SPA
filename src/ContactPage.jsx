import './ContactPage.css';
import Form from './Form';
import SuccessMessage from './SuccessMessage';
import { useState } from 'react';

function ContactPage() {
    const [isSent, setIsSent] = useState(false);
    const [name, setName] = useState('');
    return (
        <div className='contact'>
            <div className='contact__title'>
                <h1 className='contact__title-h'>Contact Me</h1>
                <p className='contact__title-p'>Feel free to reach out</p>
            </div>
            <div className='contact__content'>
                <div className='contact__info-container'>
                    <div className='contact__info'>
                        <i className="gg-phone"></i>
                        <div>
                            <h2 className='contact__h2'>Phone</h2>
                            <p>(206)3073132</p>
                        </div>
                    </div>

                    <div className='contact__info'>
                        <i className="gg-mail"></i>
                        <div>
                            <h2 className='contact__h2'>Email</h2>
                            <p>lu.rui2@northeastern.edu</p>
                        </div>
                    </div>

                    <div className='contact__info'>
                        <i className="gg-pin"></i>
                        <div>
                            <h2 className='contact__h2'>Location</h2>
                            <p>Seattle, WA</p>
                        </div>
                    </div>

                </div>

                <div className='contact__form'>
                    {isSent ? <SuccessMessage name={name} /> : <Form setName={setName} setIsSent={setIsSent} />}
                </div>
            </div>
        </div>
    );
}

export default ContactPage;