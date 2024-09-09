import React from 'react';
import PropTypes from 'prop-types';
import styles from "../../../style/Header.module.css";


const ExpenseButton = ({ onClick, text = 'New Expense' }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <span>{text}</span>
        </button>
    );
};

ExpenseButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string,
};

export default ExpenseButton;
