import React, { useState } from 'react'; 
import Cookie from 'js-cookie';
import Header from './Header';
import Description from './Description';
import { UserProvider } from './Context'; 
import styles from '../style/Dashboard.module.css';

const Dashboard = () => {
    const [expenses, setExpenses] = useState([]);

    const handleAddExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    return (
        <UserProvider>  
            <div className={styles.DashboardContainer}>
                <Header onAddExpense={handleAddExpense} />
                <Description expenses={expenses} />
                <h1>Welcome to Your Dashboard</h1>
                {/* Additional content */}
            </div>
        </UserProvider>
    );
};

export default Dashboard;
