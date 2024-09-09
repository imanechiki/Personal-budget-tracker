// src/components/Header.jsx
import React from 'react';
import { useUser } from "../../utils/contexts/Context.jsx";
import styles from "../../style/Header.module.css";
import LogoImage from "../../assets/logo-main.svg";
import IconUser from "../../assets/user.svg";
import ExpenseButton from "../../components/Buttons/ExpenseButton/ExpenseButton.jsx";  

const Header = ({ onOpenModal }) => {
    const { userDetails } = useUser();

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={LogoImage} alt="Logo" className={styles.logo} />
            </div>
            
            <div className={styles.welcome}>
                <ExpenseButton onClick={onOpenModal} text="New Expense" /> {/* Using the reusable button */}
                <img src={IconUser} alt="User Icon" className={styles.icon} />
                <h1>Welcome, {userDetails.name || 'Guest'}</h1>
            </div>
        </header>
    );
};

export default Header;
