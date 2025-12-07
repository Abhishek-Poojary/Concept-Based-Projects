import type { Transaction } from './types';
export const calculateTotals = (transactions: Transaction[]) => {
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
  return { totalIncome, totalExpenses };
};

export const groupExpensesByMonth = (transactions: Transaction[]) => {
  const expenses = transactions.filter(t => t.type === 'expense');
  const grouped: { [key: string]: number } = {};
  expenses.forEach(exp => {
    const month = new Date(exp.date).toLocaleString('default', { month: 'long', year: 'numeric' });
    grouped[month] = (grouped[month] || 0) + exp.amount;
  });
  return Object.entries(grouped).map(([month, amount]) => ({ month, amount }));
};