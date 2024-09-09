// Dashboard.js

import React, { useState } from 'react'; 
import Cookie from 'js-cookie';
import Header from '../../components/Header/Header.jsx';
import Description from '../../pages/dashboard/Description.jsx';
import ExpenseModal from '../../components/Buttons/ExpenseButton/ExpenseModal.jsx'; 
import { UserProvider } from '../../utils/contexts/Context.jsx'; 
import styles from '../../style/Dashboard.module.css';

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

            </div>
        </UserProvider>
    );
};

export default Dashboard;
