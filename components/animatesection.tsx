import React from 'react'
import { motion } from 'framer-motion'

type IAnimateSectionProps = {
    delay?: number,
    children?: React.ReactNode
    className?: string
}



const AnimateSection : React.FC<IAnimateSectionProps> = ({ delay, children, className }) => {

    const animateVariants = {
        show: {
            opacity: 1,
            y: 0,
        },
        hide: {
            opacity: 0,
            y: -20,
        }
    }
    
    return (
        <motion.div
            variants={animateVariants}
            initial={{ opacity: 0, y: -20 }}
            animate={"show"}
            transition={{ delay: delay ? delay : 0 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default AnimateSection