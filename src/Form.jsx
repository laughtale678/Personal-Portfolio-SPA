import './Form.css';
import { useState } from 'react';
import Button from './Button';
function Form({ setName, setIsSent }) {
    const [senderName, setSenderName] = useState('');
    const [nameIsMissing, setNameIsMissing] = useState(false);
    const [email, setEmail] = useState('');
    const [emailIsMissing, setEmailIsMissing] = useState(false);
    const [message, setMessage] = useState('');
    const [messageIsMissing, setMessageIsMissing] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    return (
        <form className='form' onSubmit={(e) => {
            e.preventDefault();
            if (senderName && email && message) {
                setName(senderName);
                setIsSent(true);
            } else {
                setNameIsMissing(() => !senderName);
                setEmailIsMissing(() => !email);
                setMessageIsMissing(() => !message);
            }

        }}>
            <label className='form__label'><span>Name:<span className='required'>*Required</span></span>
                <input type='text' name='name' onChange={(e) => setSenderName(e.target.value)} />
                {nameIsMissing && <span className='missingMessage'>Name is required</span>}
            </label>
            <label className='form__label'><span>Email:<span className='required'>*Required</span></span>
                <input type='text' name='email' onChange={(e) => setEmail(e.target.value)} />
                {emailIsMissing && <span className='missingMessage'>Email is required</span>}
            </label>
            <label className='form__label'>
                <span>Reason for Contact:</span>
                <select
                    name='reason'
                    value={selectedOption}
                    onChange={(e) => {
                        setSelectedOption(e.target.value);
                    }}
                >
                    <option value=''>Select a reason</option>
                    <option value='general'>General Inquiry</option>
                    <option value='feedback'>Feedback</option>
                    <option value='other'>Other</option>
                </select>

                {selectedOption === 'other' && (
                    <input
                        type='text'
                        name='otherReason'
                        placeholder='Specify other reason'
                    />
                )}
            </label>
            <label className='form__label'><span>Message:<span className='required'>*Required</span></span>
                <textarea className='form__message' type='text' name='message' onChange={(e) => setMessage(e.target.value)} />
                {messageIsMissing && <span className='missingMessage'>Message is required</span>}
            </label>

            <Button className='form__button' type='submit'>Send</Button>
        </form>
    )
}
export default Form;