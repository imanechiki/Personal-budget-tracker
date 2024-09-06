// Dashboard.js

import React, { useState } from 'react'; 
import Cookie from 'js-cookie';
import Header from './Header';
import Description from './Description';
import ExpenseModal from './ExpenseModal'; 
import { UserProvider } from './Context'; 
import styles from '../style/Dashboard.module.css';

const Dashboard = () => {
    const [expenses, setExpenses] = useState([]);
    const [modalOpen, setModalOpen] = useState(false); 

    const handleAddExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <UserProvider>  
            <div className={styles.DashboardContainer}>
                <Header onAddExpense={handleAddExpense} onOpenModal={handleOpenModal} />
                <ExpenseModal isOpen={modalOpen} onClose={handleCloseModal} onSave={handleAddExpense} />
                <Description expenses={expenses} />
                <h1>Welcome to Your Dashboard</h1>

                {/* Render the modal here */}
            </div>
        </UserProvider>
    );
};

export default Dashboard;
