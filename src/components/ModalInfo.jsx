import { motion }from "framer-motion";

const ModalInfo = ({visible, message, onClose, type}) => {
    if (!visible){
        return null;
    }
	return (
		<div className="modal-overlay">
            <motion.div
                    className={`notification-${type}`}
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.2}}
            >
                <div>
                    <p>{message}</p>
                    <div className="button-container">
                        <button 
                            className={`btn-${type}`}
                            onClick={onClose}>
                            Ok
                        </button>
                    </div>
                </div>
                <button 
                    className={`close-btn-${type}`}
                    onClick={onClose}>
                    x
                </button>
            </motion.div>
        </div>
	);
}
export default ModalInfo;