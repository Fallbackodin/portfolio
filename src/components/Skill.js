import React from 'react'
import { motion } from "framer-motion"
import DevIcon from "devicon-react-svg";
import "../css/Skill.css"

export default function Skill() {
    return (
    <div className="skill">
        <motion.h1 className="skill-header"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        variants={{ visible: {opacity: 1, scale: 1, y: ["50%", "0%"]}, hidden: {opacity: 0, scale: 1}, }}
        >My Skill Set</motion.h1>
        <motion.div className="skill-row"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        variants={{ visible: {opacity: 1, scale: 1, x: ["-100%", "0%"]}, hidden: {opacity: 0, scale: 1}, }}>
            <div className="skill-col">
                <DevIcon icon="html5"  className="skill-HTML"/>
                <p>HTML</p>
            </div>
            <div className="skill-col">
                <DevIcon icon="css3" className="skill-CSS"/>
                <p>CSS</p>
            </div>
            <div className="skill-col">
                <DevIcon icon="javascript" className="skill-JS"/>
                <p>Javascript</p>
            </div>
            <div className="skill-col">
                <DevIcon icon="react" className="skill-react"/>
                <p>React</p>
            </div>
            <div className="skill-col">
                <DevIcon icon="react" className="skill-react"/>
                <p>React Native</p>
            </div>
        </motion.div>
        <motion.div className="skill-row"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        variants={{ visible: {opacity: 1, scale: 1, x: ["100%", "0%"]}, hidden: {opacity: 0, scale: 1}, }}>
            <div className="skill-col">
                <DevIcon icon="code" className="skill-code"/>
                <p>C</p>
            </div>
            <div className="skill-col">
                <DevIcon icon="java" className="skill-java"/>
                <p>Java</p>
            </div>
            <div className="skill-col">
                <DevIcon icon="git" className="skill-git"/>
                <p>Git</p>
            </div>
            <div className="skill-col">
                <DevIcon icon="github" className="skill-github"/>
                <p>Github</p>
            </div>
            <div className="skill-col">
                <DevIcon icon="wordpress" className="skill-wordpress"/>
                <p>WordPress</p>
            </div>
        </motion.div>
    </div>
    )
}
