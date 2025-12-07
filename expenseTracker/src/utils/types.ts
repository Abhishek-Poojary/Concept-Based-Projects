export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  date: string; // ISO string
  time: string; // HH:MM format
}


export type TransactionType = 'income' | 'expense';