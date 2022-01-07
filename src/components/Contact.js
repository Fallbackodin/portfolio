import React from "react"
import { motion } from "framer-motion"
import "../css/Contact.css"

export default function Contact() {
    return (
        <div className="contact">
            <h1 className="contact-header">Contact Me</h1>
            <div className="contact-row">
                <div className="contact-column">
                    <input type="text" placeholder="Name" className="contact-upper-input"/>
                </div>
                <div className="contact-column">
                    <input type="text" placeholder="Email" className="contact-upper-input"/>
                </div>
            </div>
            <div className="contact-message">
                <textarea type="text" placeholder="Message" className="contact-message-input"></textarea>
            </div>
            <motion.div className="contact-submit-button">
                <p className="contact-submit-text">Send Email!</p>
            </motion.div>
        </div>
    )
}
