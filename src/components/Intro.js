import React from "react"
import { motion } from "framer-motion"
import "../css/Intro.css"

export default function Intro(prop) {
    return (
        <div className="intro">
            <div className="intro-mobile">
                <motion.h1 className="intro-name"  
                transition={{ duration: 1.5 }}
                initial="hidden"
                whileInView="visible"
                variants={{ visible: {opacity: 1, scale: 1, x: ["-50%", "0%"]}, hidden: {opacity: 0, scale: 1} }}
                viewport={{ once: true }}
                >Joseph Yim</motion.h1>
                <motion.p className="intro-name-text"
                transition={{ duration: 1.5 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: {opacity: 1, scale: 1, x: ["50%", "0%"]}, hidden: {opacity: 0, scale: 1} }}>
                    Hello! My name is Joseph!
                    <br></br> 
                    I'm a web programmer that loves to learn new things!
                </motion.p>
                <motion.div className="intro-work-button" ref={prop.reference} onClick={prop.click}
                animate={{ y: ["50%", "0%"] }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1.5 }}
                variants={{ visible: {opacity: 1, scale: 1}, hidden: {opacity: 0, scale: 1 } }}
                viewport={{ once: true }}>
                    <p className="intro-work-text">Click to see my work!</p>
                </motion.div>
            </div>
            
        </div>
    )
}



