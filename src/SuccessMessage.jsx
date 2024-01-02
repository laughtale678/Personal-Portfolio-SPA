import './SuccessMessage.css';
function SuccessMessage({ name }) {
    return (
        <div className="message-box">
            <p>{`Hi ${name}, Thanks for reaching out!`}</p>
            <p>This is for demonstration purposes. If you would like to contact me, feel free to send an email or give me a call.</p>
        </div>
    );
}

export default SuccessMessage;