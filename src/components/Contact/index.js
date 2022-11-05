import './index.css';
// import Footer from '../Footer';

const Contact = () => {
    return (
        <div className='App'>
            <header className = "contactHeader">
                <h1 className='contact-me'> Contact Me </h1>
                <h4 className='contactSub'> Hi there, contact me to ask me about anything you have in mind. </h4>
                <form className='form'>
                    <div className='name'>
                        <label className="labels" htmlFor='first_name'>First Name</label>
                            <textarea 
                                id="first_name" 
                                type="text" 
                                placeholder='Enter your first name' 
                                tabIndex={1}
                                required 
                                maxLength={15}
                                />
                        <label className="labels" htmlFor='last_name'> Last Name</label>
                            <textarea 
                                id="last_name" 
                                type="text" 
                                placeholder='Enter your last name' 
                                tabIndex={2}
                                required 
                                maxLength={15}
                                />
                    </div>
                    <div className='Email'>
                        <label className = "labels" htmlFor='email'> Email </label><br/>
                        <input id="email" type="email" placeholder='yourname@email.com' required/>
                    </div>
                    <div className='message'>
                        <label className = "labels" htmlFor='message'> Message </label>
                        <textarea id="message" type="text" minLength={100} placeholder='Send me a message and I will reply you as soon as possible...' required/>
                    </div>
                    <label>
                        <input type="checkbox" required/>
                        You agree to provide your data to Sophia who may contact you.
                    </label>
                    <p>
                        <button id="btn__submit" className="submitBtn" type = "submit"> Send Message</button>
                    </p>
                </form>
            </header>
        </div>
    )
}

export default Contact;