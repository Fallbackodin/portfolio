import React from "react"
import { motion } from "framer-motion"
import Sutton from "../SuttonWebsite.svg"
import "../css/Project.css"

export default function Project(prop) {
    return (
        <div className="project" ref={prop.reference}>
            <motion.h1 className="project-feature-header"
            initial="hidden"
            transition={{ duration: 1.5 }}
            whileInView="visible"
            animate={{ y: ["50%", "0%"] }}
            viewport= {{ once: true }}
            variants={{ visible: {opacity: 1, scale: 1, y: ["50%", "0%"]}, hidden: {opacity: 0, scale: 1} }}>Featured Project</motion.h1>
            <motion.h2 className="project-feature-name"
            initial="hidden"
            transition={{ duration: 1.5 }}
            whileInView="visible"
            animate={{ y: ["50%", "0%"] }}
            viewport= {{ once: true }}
            variants={{ visible: {opacity: 1, scale: 1, y: ["50%", "0%"]}, hidden: {opacity: 0, scale: 1} }}>Sutton’s Pool Supply INC</motion.h2>
            <div className="project-row">
                <div className="project-column project-left">
                    <motion.img src={Sutton}
                    whileInView={{ x: ["-50%", "0%"] }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}></motion.img>
                </div>
                <div className="project-column project-right">
                    <motion.p className="project-sutton-text"
                    whileInView={{ x: ["100%", "0%"] }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}>A website made for a local pool company made on WordPress using HTML, CSS, and WordPress plugins.
                    This website is an overview about the pool company that goes over their different services as well as their location and contact information.
                    <br></br>
                    <br></br>
                    <a href="https://suttonspool.com/">-Website</a></motion.p>
                </div>
            </div>
        </div>
    )
}
