import React, { useState } from "react"
import { motion } from "framer-motion"
import "../css/Contact.css"

export default function Contact() {
    
    const [message, setMessage] = useState({name: "", email: "", message: ""});

    const change = (e) => {
        setMessage({...message, [e.target.name]: e.target.value})
    }
    
    console.log(message);

    return (
        <div className="contact">
            <motion.h1 className="contact-header"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            variants={{ visible: {opacity: 1, scale: 1, y: ["50%", "0%"]}, hidden: {opacity: 0, scale: 1}, }}>
            Contact Me</motion.h1>
            <motion.div className="contact-row"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            variants={{ visible: {opacity: 1, scale: 1, y: ["50%", "0%"]}, hidden: {opacity: 0, scale: 1} }}>
                <div className="contact-column">
                    <textarea type="text" placeholder="Name" className="contact-upper-input" name="name" value={message.name} onChange={change}/>
                </div>
                <div className="contact-column">
                    <textarea type="text" placeholder="Email" className="contact-upper-input" name="email" value={message.email} onChange={change}/>
                </div>
            </motion.div>
            <motion.div className="contact-message"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            variants={{ visible: {opacity: 1, scale: 1, y: ["50%", "0%"]}, hidden: {opacity: 0, scale: 1}, }}>
                <textarea type="text" placeholder="Message" className="contact-message-input" name="message" value={message.message} onChange={change}></textarea>
            </motion.div>
            <motion.div className="contact-submit-button"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            variants={{ visible: {opacity: 1, scale: 1, y: ["50%", "0%"]}, hidden: {opacity: 0, scale: 1}, }}>
                <p className="contact-submit-text">Send Email!</p>
            </motion.div>
        </div>
    )
}
