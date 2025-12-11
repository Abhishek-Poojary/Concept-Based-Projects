# 🎮 Tic-Tac-Toe (React)

A modern, optimized version of the classic **Tic-Tac-Toe** game built using **React**.
This project demonstrates clean component architecture, React performance optimizations, and an interactive UI.

## 🖥️ Demo

You can add a link here later (e.g., Vercel/Netlify):

```
https://your-demo-link.com
```

## 🚀 Features

* 🎲 **Classic Tic-Tac-Toe gameplay**
* ⚡ **Optimized rendering** using `React.memo`, `useCallback`, and `useMemo`
* 🧠 **Winner detection**
* 🕒 **Move history & time travel**
* 🎨 **Clean, responsive UI**
* 💡 **Simple, easy-to-read code structure**

## 🛠️ Tech Stack

* **React**
* **JavaScript (ES6+)**
* **CSS**
* React Hooks (`useState`, `useMemo`, `useCallback`)

## 📦 Installation & Setup

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm start
```

The game will open at:

```
http://localhost:3000
```

## 🧠 Optimizations Used

### ✔ Memoized Square Component

Prevents unnecessary re-renders:

```jsx
const Square = React.memo(function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
});
```

### ✔ Stable Callbacks

```jsx
const handleClick = useCallback((i) => { ... }, [winner, squares, xIsNext]);
```

### ✔ Cached Winner Calculation

```jsx
const winner = useMemo(() => calculateWinner(squares), [squares]);
```

### ✔ Grid-Based Board UI (CSS)

```css
.board {
  display: grid;
  grid-template-columns: repeat(3, 70px);
}
```

## 🤝 Contributing

Contributions are welcome!
Feel free to open issues or submit pull requests.

## 📄 License

This project is open-source and available under the **MIT License**.

