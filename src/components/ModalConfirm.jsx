import { motion }from "framer-motion";

const ModalConfirm = ({visible, message, onClose, onConfirm}) => {
    const confirmAndClose = () => {
        onConfirm();
        onClose();
    }
    if (!visible){
        return null;
    };
    return (
        <div className="modal-overlay">
            <motion.div
                    className={`notification-warning`}
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.2}}
            >
                <div>
                    <p>{message}</p>
                    <div className="button-container">
                        <button 
                            className={`btn-warning`}
                            onClick={confirmAndClose}>
                            Confirmar
                        </button>
                    </div>
                </div>
                <button 
                    className={`close-btn-warning`}
                    onClick={onClose}>
                    x
                </button>
            </motion.div>
        </div>
    );
}
export default ModalConfirm;