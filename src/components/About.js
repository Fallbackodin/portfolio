import React from "react"
import "../css/About.css"
import { motion } from "framer-motion"
import ProfilePic from "../ProfilePic.svg"

export default function About() {
    return (
        <div className="about">
            <motion.h1 className="header" 
            transition={{ duration: 1.25 }}
            whileInView={{ x: ["-100%", "0%"] }}
            viewport={{ once: true }}>About Me</motion.h1>
            <div className="row">
                <div className="column left">
                    <motion.p className="description"
                    whileInView={{ x: ["-100%", "0%"] }}
                    animate={{x: ["-100%", "0%"] }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}>
                    I am a student at the University of Central Florida majoring in Computer Science. I aspire to begin a career as a web developer in the near future. I love meeting new people and working in a group, especially when we accomplish something big like a creating a website!
                    <br></br>
                    <br></br>
                    Some fun facts about me:
                    <br></br>
                    -Love sports, especially swimming and football
                    <br></br>
                    -A big UCF and Jaguars Fans!</motion.p>
                </div>
                <div className="column">
                    <motion.img className="profile-picture" src={ProfilePic}
                    whileInView="visible"
                    transition={{ duration: 1.5 }}
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{ visible: {opacity: 1, scale: 1, rotate: -720, x: ["50%", "0%"]}, hidden: {opacity: 0, scale: 1} }}></motion.img>
                </div>
            </div>
        </div>
    )
}
