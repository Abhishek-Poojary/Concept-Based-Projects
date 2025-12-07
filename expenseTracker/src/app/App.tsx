import  { useState } from 'react';
import { ExpenseForm, IncomeForm, WalletDisplay, ExpenseChart } from '../components';
import { loadData, saveData } from '../lib/storage';
import { calculateTotals, groupExpensesByMonth } from '../utils/calculations';
import type { Transaction } from '../utils/types';

function App(){
  
  const [transactions, setTransactions] = useState<Transaction[]>(() => loadData());
  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction = { ...transaction, id: Date.now().toString() };
    const updated = [...transactions, newTransaction];
    setTransactions(updated);
    saveData(updated);
  };
  const { totalIncome, totalExpenses } = calculateTotals(transactions);
  const monthlyExpenses = groupExpensesByMonth(transactions);

  return (
    <div className="app-container">
      <h1 className="header">Expense Tracker</h1>
      <WalletDisplay totalIncome={totalIncome} totalExpenses={totalExpenses} />
      <div className="forms-section">
        <IncomeForm onAdd={addTransaction} />
        <ExpenseForm onAdd={addTransaction} />
      </div>
      <div className="chart-section">
        <ExpenseChart data={monthlyExpenses} />
      </div>
    </div>
  );
};

export default App;