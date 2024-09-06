import React, { useState } from 'react'; // Ensure useState is imported here too
import { useUser } from "./Context";
import styles from "../style/Header.module.css";
import LogoImage from "../assets/logo-main.svg";
import IconUser from "../assets/user.svg";
import ExpenseModal from './ExpenseModal';

const Header = ({ onAddExpense }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { userDetails } = useUser();

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={LogoImage} alt="Logo" className={styles.logo} />
            </div>
            <button className={styles.button} onClick={handleOpenModal}>
                New Expense
            </button>
            <ExpenseModal isOpen={modalOpen} onClose={handleCloseModal} onSave={onAddExpense} />
            <div className={styles.welcome}>
                <img src={IconUser} alt="User Icon" className={styles.icon} />
                <h1>Welcome, {userDetails.name || 'Guest'}</h1>
            </div>
        </header>
    );
};

export default Header;
