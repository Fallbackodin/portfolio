import React from 'react'
import { motion } from "framer-motion"
import '../css/Intro.css'

export default function Intro() {
    return (
        <div className="intro">
            <motion.h1 className='name'  
            animate={{ x: ['-50%', '0%']}}
            transition={{ duration: 1.5}}
            initial='hidden'
            whileInView='visible'
            variants={{visible: {opacity: 1, scale: 1}, hidden: {opacity: 0, scale: 1}, x: ["-50%", "0%"]}}
            viewport={{ once: true }}
            >Joseph Yim</motion.h1>
            <motion.p className='name-text'
            animate={{ x: ["50%", "0%"] }} 
            transition={{ duration: 1.5}}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={{visible: {opacity: 1, scale: 1}, hidden: {opacity: 0, scale: 1}, x: ["50%", "0%"]}}>
                Hello! My name is Joseph!
                <br></br> 
                I'm a new web programmer that loves to learn new things!
            </motion.p>
        </div>
    )
}



