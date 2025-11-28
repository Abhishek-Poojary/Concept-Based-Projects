# React Suspense API Call App

A modern React TypeScript application that demonstrates how to fetch API data without using `useEffect` by leveraging **React Suspense** and a custom promise-wrapping pattern. This app includes mock data via **Mock Service Worker (MSW)** and uses **React Router** for navigation.

## 🎯 Project Overview

This project showcases a best-practice approach to data fetching in React by:
- **Eliminating useEffect**: Data fetching happens during component render using Suspense
- **Using Promise Wrappers**: Custom wrapper converts promises into Suspense-compatible resources
- **Mocking APIs with MSW**: Intercepts HTTP requests to serve realistic mock data
- **Type-Safe**: Built with TypeScript for type safety and better developer experience
- **Clean Routing**: React Router v6 for seamless navigation between pages

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open your browser and navigate to `http://localhost:5173`

## 📡 How It Works

### React Suspense Pattern (No useEffect!)

Instead of using `useEffect`, this app leverages React Suspense for data fetching:

\`\`\`tsx
// In a component
const Symptoms = () => {
  const resource = createResource().symptoms;  // Resource created at render time
  const data = resource.read();                 // This throws a promise if pending
  return <div>{/* Render data */}</div>;
};

// Wrapped in Suspense boundary
<Suspense fallback={<LoaderSpinner />}>
  <Symptoms />
</Suspense>
\`\`\`

When `resource.read()` is called:
1. If data is **pending**, it throws the suspender promise
2. React catches it and shows the `fallback` component
3. When the promise resolves, React retries rendering
4. Data is now available and renders successfully

### Promise Wrapper

The `wrapPromise` function converts any promise into a Suspense-compatible resource:

\`\`\`
const wrapPromise = (promise) => {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (res) => { status = "success"; result = res; },
    (err) => { status = "error"; result = err; }
  );
  
  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    }
  };
};
\`\`\`

### Mock Service Worker (MSW)

All API calls are intercepted by MSW, which serves mock data without needing a real backend:

- **GET /api/symptoms** → Returns array of symptoms
- **GET /api/diagnoses** → Returns array of diagnoses

MSW runs as a service worker in the browser and intercepts all matching HTTP requests transparently.

## 🛠️ Key Features

- ✅ **No useEffect**: Uses Suspense for data fetching
- ✅ **Type-Safe**: Full TypeScript support
- ✅ **Mock Data**: Built-in MSW for development/testing
- ✅ **Error Handling**: Error boundary catches rendering errors
- ✅ **Loading States**: Automatic loading UI via Suspense
- ✅ **Client-Side Routing**: React Router for smooth navigation

## 📦 Technology Stack

- **React 19+**: UI library with Suspense support
- **TypeScript**: Type-safe development
- **React Router v6**: Client-side routing
- **Vite**: Fast build tool and dev server
- **Mock Service Worker**: API mocking
- **Tailwind CSS**: Utility-first styling (optional)


## 🎓 Why This Pattern?

Traditional `useEffect` data fetching has limitations:
- Waterfalls: Sequential loading delays
- Race conditions: Hard to handle outdated requests
- Boilerplate: Lots of state management code

React Suspense with promise wrapping provides:
- **Parallel Loading**: All data fetches start immediately
- **Simple**: No state management needed
- **Built-in**: React handles everything
- **Scalable**: Works with multiple data sources

## 📝 License

This project is open source and available for learning purposes.
