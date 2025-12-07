import { useState } from "react";
import type { TransactionType } from "../../utils/types";

interface FormProps {
    onAdd: (transaction: {  type: TransactionType; amount: number; date: string; time: string }) => void;
    type: TransactionType;
}

export function FormUI({ onAdd, type }: FormProps) {
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (amount && date && time) {
            onAdd({ type: type, amount: parseFloat(amount), date, time });
            setAmount('');
            setDate('');
            setTime('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-card">
            <h3>Add {type === 'expense' ? 'Expense' : 'Income'}</h3>
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            />
            <button type="submit">Add {type === 'expense' ? 'Expense' : 'Income'}</button>
        </form>
    );
}