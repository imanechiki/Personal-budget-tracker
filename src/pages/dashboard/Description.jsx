import "../../style/Description.module.css";
import ExpenseButton from "../../components/Buttons/ExpenseButton/ExpenseButton.jsx";  

import React, { useState, useMemo } from 'react';

const Description = ({ expenses }) => {
    const [selectedName, setSelectedName] = useState('');

    const uniqueNames = useMemo(() => {
        const names = expenses.map(expense => expense.name);
        return Array.from(new Set(names)); 
    }, [expenses]);

    const handleSelectChange = (e) => {
        setSelectedName(e.target.value);
    };

    const filteredExpenses = expenses.filter(expense => 
        selectedName === '' || expense.name === selectedName
    );

    return (
        <div className="descriptionContainer">
            <div className="descriptionHeader">
                <h2>Description</h2>
                <select onChange={handleSelectChange} value={selectedName}>
                <option value="">All</option>
                {uniqueNames.map((name, index) => (
                    <option key={index} value={name}>{name}</option>
                ))}
            </select>
            </div>
            
            {filteredExpenses.length > 0 ? (
                <ul>
                    {filteredExpenses.map((expense, index) => (
                        <li key={index}>{expense.name} - ${expense.amount}</li>
                    ))}
                </ul>
            ) : (
                <div>
                    <p>Looks like you haven't added any <span>expenses yet.</span></p>
                    <p>No worries, just hit the 'New Expense' button 
                    to get started</p>
                    
                    

                </div>
            )}
        </div>
    );
};

export default Description;
