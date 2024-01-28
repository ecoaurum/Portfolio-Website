import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import MessageBox from "../boxes/MessageBox";


const Result = () => {
    return (
        <MessageBox variant="success">
            <div>
                <p>Your message has been successfully sent</p>
                <p>I will contact you soon</p>
            </div>
        </MessageBox>
    );
};

function ContactComponent(props) {
    const form = useRef();
    const [result, showResult] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_86k5i4q', 'template_lpu1cuq', form.current, '3ESLBmBRR8KQ1RLTk')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
        }

        //Hide result
        setTimeout(() => {
            showResult(false)
        }, 5000);

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="formWord">
                <h2>Say Hello!</h2>
                <span>Full Name</span>
                <br />
                <input className="input100" type="text" name="fullName" required />
                <br />
                <span>Phone Number (optional)</span>
                <br />
                <input className="input100" type="text" name="phone" />
                <br />
                <span>Enter Email</span>
                <br />
                <input className="input100" type="text" name="email" required />
                <br />
            </div>
            <div className="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button>SUBMIT</button>

                <div className="row">{result ? <Result /> : null}</div>
            </div>
        </form>
    );
};

export default ContactComponent;