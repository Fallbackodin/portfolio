import React from "react"
import { motion } from "framer-motion"
import DevIcon from "devicon-react-svg"
import Sutton from "../SuttonWebsite.svg"
import SuttonMobile from "../SuttonWebsiteMobile.svg"
import web from "../website.svg"
import "../css/Project.css"

export default function Project(prop) {
    return (
        <div className="project">
            <motion.h1 className="project-feature-header" ref={prop.reference}
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
                    <motion.img src={Sutton} className="project-sutton"
                    whileInView={{ x: ["-50%", "0%"] }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}></motion.img>
                </div>
                <div className="project-column project-left">
                    <motion.img src={Sutton} className="project-sutton-mobile"
                    whileInView={{ x: ["-50%", "0%"] }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}></motion.img>
                </div>
                <div className="project-column project-right">
                    <motion.p className="project-sutton-text"
                    whileInView={{ x: ["100%", "0%"] }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}>A responsive website made for a local pool company made on WordPress using HTML, CSS, and WordPress plugins.
                    This website is an overview about the pool company that goes over their different services as well as their location and contact information.
                    <br></br>
                    <br></br>
                    <a href="https://suttonspool.com/" target="blank"><img src={web} className="project-web-icon"></img></a></motion.p>
                </div>
            </div>
            <div>
                <motion.h1 className="project-other-header"
                initial="hidden"
                transition={{ duration: 1.5 }}
                whileInView="visible"
                animate={{ y: ["50%", "0%"] }}
                viewport= {{ once: true }}
                variants={{ visible: {opacity: 1, scale: 1, y: ["50%", "0%"]}, hidden: {opacity: 0, scale: 1} }}>Other Project</motion.h1>
                <motion.div className="project-first"
                whileInView={{ x: ["-150%", "0%"] }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}>
                    <h2 className="project-first-title">Kindling</h2>
                    <p className="project-first-desc">A mobile and web application that allows individuals to find a group, and vice versa, for a project. This project implemented a Tinder like system where individuals and groups can swipe left and right on their associated counterpart inorder to find who they are looking for.
                    <br></br>
                    <br></br>
                    <a href="https://github.com/kiers10/kindling-21-mobile" target="blank"><DevIcon icon="github" className="project-github-icon"/></a></p>
                </motion.div>
            </div>
        </div>
    )
}
