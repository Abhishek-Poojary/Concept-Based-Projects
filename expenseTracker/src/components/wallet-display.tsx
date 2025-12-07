interface WalletDisplayProps {
  totalIncome: number;
  totalExpenses: number;
}

function WalletDisplay({ totalIncome, totalExpenses }: WalletDisplayProps) {
  return (
    <div className="wallets">
      <div className="wallet-card income">
        <h3>Income Wallet</h3>
        <p>${totalIncome.toFixed(2)}</p>
      </div>
      <div className="wallet-card expense">
        <h3>Expense Wallet</h3>
        <p>${totalExpenses.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default WalletDisplay;