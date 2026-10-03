# Todo List App

A simple and beginner-friendly **Todo List application built with React.js**.

This project is created to practice the core concepts of React such as **components, state management, props, event handling, and list rendering**.

## 🚀 Features

* Add new todos
* Display todo list
* Update todo status
* Mark todos as completed/uncompleted
* Show total todos
* Show completed todos
* Show uncompleted todos
* Simple and clean user interface
* Responsive layout

## 🛠️ Technologies Used

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* React Hooks
* Vite

## 📂 Project Structure

```text
ToDo_List/
│
├── src/
│   ├── components/
│   │   ├── AddTodo.jsx
│   │   └── TodoList.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/ankitmor96/ToDo_List.git
```

Go to the project folder:

```bash
cd ToDo_List
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run on the local development server provided by Vite.

## 📖 React Concepts Practiced

### useState

React's `useState` hook is used to manage the todo data.

```jsx
const [todos, setTodos] = useState(initialTodo);
```

### Components

The application is divided into reusable components such as:

* `App`
* `AddTodo`
* `TodoList`

### Props

Data and functions are passed between components using props.

### Event Handling

The application handles user actions such as:

* Adding a todo
* Updating a todo
* Completing a todo
* Uncompleting a todo

### Array Methods

JavaScript array methods such as `map()` are used to update and display todo items.

## 📊 Todo Status

The application keeps track of three basic counts:

| Status      | Description                  |
| ----------- | ---------------------------- |
| Total       | Total number of todos        |
| Completed   | Todos marked as completed    |
| Uncompleted | Todos that are still pending |

## 🎯 Purpose

This project is mainly created for **learning and practicing React.js fundamentals**.

It helps understand how React state changes update the user interface dynamically.

## 👨‍💻 Author

**Ankit Mor**

GitHub: [ankitmor96](https://github.com/ankitmor96)

## 📄 License

This project is created for learning and educational purposes.

