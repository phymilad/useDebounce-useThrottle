# 🔁 useDebounce vs useThrottle - React Hooks Demo

This is a simple React app that demonstrates the difference between two powerful performance optimization hooks: `useDebounce` and `useThrottle`. These hooks are commonly used to control how often a function executes in response to frequent events, such as user input.

## 🚀 Features

- 🧠 Understand how **debouncing** and **throttling** affect user input
- 🔧 Adjusted with a fixed delay of `1000ms`
- 📦 Clean and minimal implementation using custom React hooks

---

## 📂 Project Structure

src/
├── App.tsx
└── hooks/
├── useDebounce.ts
└── useThrottle.ts

yaml
Copy
Edit

---

## 📦 Getting Started

1. Clone the repository or copy the files into a React project.
2. Install dependencies if you're not using Create React App:
   ```bash
   npm install react react-dom typescript
   Run the development server:
   ```

bash
Copy
Edit
npm start
🧪 How It Works
App.tsx
This is the main component of the app. It includes:

An input field where the user types

Two values displayed:

debouncedValue — updates after the user stops typing for the specified delay

throttledValue — updates at most once every delay interval, even if the user continues typing

tsx
Copy
Edit
const delay = 1000
const debouncedValue = useDebounce(search, delay)
const throttledValue = useThrottle(search, delay)
🕒 useDebounce Hook
ts
Copy
Edit
export function useDebounce<T>(value: T, delay: number): T
Waits for the user to stop typing for a given time before updating the value.

Useful for delaying execution until the action has "settled" (e.g., search input).

🧠 Real-world examples:

Search box suggestions

Validating a form field after the user stops typing

🕓 useThrottle Hook
ts
Copy
Edit
export function useThrottle<T>(value: T, limit: number): T
Ensures the value updates at most once every limit milliseconds.

Useful when you want to limit execution frequency, regardless of user speed.

🧠 Real-world examples:

Handling scroll or resize events

Auto-saving form input periodically

📊 Output Example
pgsql
Copy
Edit
User types: "Hello"
Debounced Value: (waits for 1s after stopping)
Throttled Value: updates every 1s during typing
🧼 License
This project is free and open-source under the MIT License.

✍️ Author
Created by a React developer interested in teaching core frontend concepts through hands-on demos.

yaml
Copy
Edit

---

Would you like me to bundle this with example screenshots or a CodeSandbox link preview section?
