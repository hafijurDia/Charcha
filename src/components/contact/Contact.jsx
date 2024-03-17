import './contact.scss';
import phone from '../../images/phone-volume.svg' ;
import address from '../../images/landmark.svg' ;
import email from '../../images/envelope.svg' ;
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';


const Contact = () => {
    const formref= useRef()
    const [done, setDone]= useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault()

        emailjs 
        .sendForm (
            "serviceid_emailjs",
            "templateid_emailjs",
            formref.current,
            "glUHSnX94wrhR2h7q"
        ).then(
            (result)=>{ console.log(result.text)
                setDone(true)
            },
            (error)=>{console.log(error.text)
            }
            
            )
            console.log( Date.toLocaleString())
    }

  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title"> Please send us your query</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={phone} alt="" className="c-icon" />
                        +88-01711-548-220
                    </div>
                    <div className="c-info-item">
                        <img src={email} alt="" className="c-icon" />
                        tcharcha@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={address} alt="" className="c-icon" />
                        Main Road, New Market, Tangail-1900
                    </div>
                </div>
            </div>


            <div className="c-right">
                <p className="c-desc">
                    <b> you can ask for our assistance on different matter</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum assumenda culpa veritatis error possimus maiores ipsa omnis est, eius adipisci?
                </p>
                <form ref={formref} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Your Name' name='user_name' />
                    <input type="text" placeholder='subject' name='user_subject' />
                    <input type="email" placeholder='Your email' name='user_email' />
                    <input type="tel" placeholder='Your Phone' name='user_phone' />
                    <textarea rows='5' placeholder='message' name='message'></textarea>
                    <button type='submit'> Submit</button>
                    { done && "thank You"}
                </form>


            </div>
        </div>
    </div>
  )
}

export default Contact