import React from 'react';
import './Contact.css';
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';

const Contact = () => {
  return (
    <section id='contact' className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact us</span>
                <span className='secondaryText'>We provide the best service in the industry.</span>
                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <Modes icon={MdCall} activity="Call Us" info="+234 123 456 7890" buttoncontent="Call Now" />
                        <Modes icon={BsFillChatDotsFill} activity="Chat with Us" info="+234 123 456 7890" buttoncontent="Chat Now" />
                    </div>
                    <div className="flexStart row">
                        <Modes icon={BsFillChatDotsFill} activity="Video Call Now" info="+234 123 456 7890" buttoncontent="Video Call" />
                        <Modes icon={HiChatBubbleBottomCenter} activity="Message" info="+234 123 456 7890" buttoncontent="Message Now" />
                    </div>
                </div>
            </div>
            <div className="flexCenter c-right">
                <div className="image-container">
                    <img src = "./elec2.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact;

const Modes = (props) => {
    return(
        <div className="flexColCenter mode">
        <div className="flexStart">
            <div className="flexCenter icon">
                <props.icon size={25} />
            </div>
            <div className="flexColStart detail">
                <span className='primaryText'>{props.activity}</span>
                <span className='secondaryText'>{props.info}</span>
            </div>
        </div>
        <div className="flexCenter button">{props.buttoncontent}</div>

    </div>
    )
}