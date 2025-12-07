import type { TransactionType } from '../utils/types';
import { FormUI } from './common/form';

interface ExpenseFormProps {  
  onAdd: (transaction: { type: TransactionType; amount: number; date: string; time: string }) => void;
}

function ExpenseForm({ onAdd }:ExpenseFormProps)  {  
    return <FormUI onAdd={onAdd} type="expense" />; 
};

export default ExpenseForm;  