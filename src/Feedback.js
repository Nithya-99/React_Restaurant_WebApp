import { Component, useState } from "react"
import './Feedback.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from "sweetalert";

export default function Feedback() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [eEmail, setEEmail] = useState('');
    const [eMessage, setEMessage] = useState('');

    const [eColor, setEColor] = useState('');
    const [mColor, setMColor] = useState('');

    let [eFlag, setEFlag] = useState(false);
    let [mFlag, setMFlag] = useState(false);

    function validate(event) {
        if (message == '') {
            setMColor('red');
            setEMessage('Please enter something!');
            setMFlag(false);
        } else {
            setMColor('#55d83b');
            setEMessage('');
            setMFlag(true);
        }

        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) && email != '') {
            setEEmail('');
            setEColor('#55d83b');
            setEFlag(true)
        } else {
            setEEmail('Invalid Email');
            setEColor('red');
            setEFlag(false)
        }
        if (mFlag && eFlag) {
            
            submit();
        }

        function submit() {
            setEFlag(false);
            setMFlag(false);
            setEColor('');
            setMColor('');
            setMessage('');
            setEmail('');
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            swal({
                title: "Feedback submitted successfully",
                text: "Thankyou!",
                icon: "success",
                button: "OK",
            });
        }
    }

    return (
        <div className='form'>
            <form className='form1'>
                <h3 align='center'>Feedback</h3>
                <div className="container">

                    <input type="text" placeholder="Enter email" name="email" id="email" data-testid="email-input" onChange={event => setEmail(event.target.value)} style={{ borderColor: eColor }} />
                    <p className='error'>{eEmail}</p>

                    <textarea placeholder="Message" name="message" id="message" data-testid="message-input" onChange={event => setMessage(event.target.value)} style={{ borderColor: mColor }}>
                    </textarea>
                    <p className='error'>{eMessage}</p>

                    <div className="clearfix">
                        <button className="btn btn-lg" name="feedback" type="button"  data-testid="submit-feedback" onClick={() => validate()}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )

}

