import React from "react"
import { motion } from "framer-motion"
import "../css/Contact.css"

export default function Contact() {
    return (
        <div className="contact">
            <motion.h1 className="contact-header"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            variants={{ visible: {opacity: 1, scale: 1, y: ["50%", "0%"]}, hidden: {opacity: 0, scale: 1}, }}>Contact Me</motion.h1>
            <motion.div className="contact-row"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            variants={{ visible: {opacity: 1, scale: 1, y: ["50%", "0%"]}, hidden: {opacity: 0, scale: 1} }}>
                <div className="contact-column">
                    <input type="text" placeholder="Name" className="contact-upper-input"/>
                </div>
                <div className="contact-column">
                    <input type="text" placeholder="Email" className="contact-upper-input"/>
                </div>
            </motion.div>
            <motion.div className="contact-message"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            variants={{ visible: {opacity: 1, scale: 1, y: ["50%", "0%"]}, hidden: {opacity: 0, scale: 1}, }}>
                <textarea type="text" placeholder="Message" className="contact-message-input"></textarea>
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
