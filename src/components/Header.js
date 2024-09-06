// Header.js

import React from 'react'; 
import { useUser } from "./Context";
import styles from "../style/Header.module.css";
import LogoImage from "../assets/logo-main.svg";
import IconUser from "../assets/user.svg";

const Header = ({ onAddExpense, onOpenModal }) => {
    const { userDetails } = useUser();

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={LogoImage} alt="Logo" className={styles.logo} />
            </div>
            <button className={styles.button} onClick={onOpenModal}>
                <span>New Expense</span>
            </button>
            <div className={styles.welcome}>
                <img src={IconUser} alt="User Icon" className={styles.icon} />
                <h1>Welcome, {userDetails.name || 'Guest'}</h1>
            </div>
        </header>
    );
};

export default Header;
