import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { IoIosClose } from 'react-icons/io';

import NotifContext from '../lib/notifContext';

type NotificationProps = {
    title: string;
    message?: string;
    id: string;
}

const NotificationContainer = () => {

    const { notifications } = React.useContext(NotifContext);

    console.log(notifications);

    return (
        <div className="fixed h-screen z-20 right-10 w-80 flex">
            <ul className="flex-1 flex flex-col-reverse">
                <AnimatePresence initial={false}>
                    {notifications.map((notification: NotificationProps) => (
                        <Notification key={notification.id} title={notification.title} description={notification.message} />
                    ))}
                </AnimatePresence>
            </ul>
        </div>
    )
}

type INotificationProps = {
    key: string,
    title: string,
    description?: string,
}

const Notification : React.FC<INotificationProps> = ({ key, title, description }) => {

    const { removeNotification } = React.useContext(NotifContext);

    return (
        <motion.li
            key={key}
            className="bg-th-light-dark rounded-lg shadow-lg p-4 mb-4 relative flex flex-row justify-between"
        >
            <div className="flex flex-col justify-between items-left">
                { title && <h1 className="font-bold text-md">{title}</h1>}
                { description && <p className="text-sm text-gray-1">{description}</p>}
            </div>
            <button onClick={() => removeNotification(key)}>
                <IoIosClose className=' cursor-pointer'/>
            </button>
        </motion.li>
    )
}

export default NotificationContainer;