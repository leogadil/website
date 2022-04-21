import React from 'react'
import { motion } from 'framer-motion'

type IAnimateSectionProps = {
    delay?: number,
    children?: React.ReactNode
    className?: string,
    whileHover?: any
}

const AnimateSection : React.FC<IAnimateSectionProps> = ({ delay, children, className, whileHover }) => {

    const animateVariants = {
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
                delay: delay ? delay - 0.05 : 0
            }
        },
        hide: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.2,
                delay: delay ? delay - 0.05 : 0
            }
        }
    }
    
    return (
        <motion.div
            variants={animateVariants}
            initial={{ opacity: 0, y: -20 }}
            animate={"show"}
            exit={"hide"}
            className={className}
            whileHover={whileHover}
        >
            {children}
        </motion.div>
    )
}

export default AnimateSection