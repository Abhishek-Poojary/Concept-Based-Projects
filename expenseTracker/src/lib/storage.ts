import type { Transaction } from "../utils/types";

export const saveData = (transactions: Transaction[]) => {
  localStorage.setItem('expenseTrackerData', JSON.stringify(transactions));
};

export const loadData = (): Transaction[] => {
  const data = localStorage.getItem('expenseTrackerData');
  return data ? JSON.parse(data) : [];
};