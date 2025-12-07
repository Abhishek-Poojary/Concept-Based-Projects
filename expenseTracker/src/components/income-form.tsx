import type { TransactionType } from '../utils/types';
import { FormUI } from './common/form';

interface IncomeFormProps {
  onAdd: (transaction: { type: TransactionType; amount: number; date: string; time: string }) => void;
}

function IncomeForm ({ onAdd }: IncomeFormProps) {
    return <FormUI onAdd={onAdd} type="income" />;
};

export default IncomeForm;