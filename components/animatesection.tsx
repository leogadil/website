import React from 'react'
import { motion } from 'framer-motion'

type IAnimateSectionProps = {
    delay?: number,
    children?: React.ReactNode
    className?: string
}

const AnimateSection : React.FC<IAnimateSectionProps> = ({ delay, children, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
                delay: delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default AnimateSection