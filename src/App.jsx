import { useState } from "react";
import AddTodo from "./components/AddTodo.jsx";
import ToDoList from "./components/TodoList.jsx";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./App.css";

const App = () => {
  const initialTodo = [
    {
      id: 1,
      task: "react",
      description: "practice"
    },
    {
      id: 2,
      task: "node.js",
      description: "practice"
    }
  ];

  const [todos, setTodos] = useState(initialTodo);

  const handleAdd = (input) => {

    const newTodo = {
      id: new Date().getTime(),
      ...input
    }

    setTodos((p) => [...p, newTodo]);

  };

  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleSelect = (todo) => {
    setSelectedTodo(todo);
  }

  const handleUpdate = (updateTodo) => {
    setTodos((p) => {
      return p.map((todo) => {
        if (todo.id === updateTodo.id) {
          return updateTodo;
        }

        return todo;

      });
    });

    setSelectedTodo(null);

  }

  const handleDelete = (id) => {
    setTodos((p) => {
      return p.filter((todo) => todo.id !== id);
    });
  };

  const handleCompleted = (id) => {
    setTodos((p) => {
      return p.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }

        return todo;

      })
    })
  }

  return (
    <>
      <h1>Todo List</h1>

      <AddTodo handleAdd={handleAdd} selectedTodo={selectedTodo} handleUpdate={handleUpdate} />
      <br />
      
      <Container className="dashbord">

        <h2 className="dashbord-title text-center">
          Dashboard
        </h2>

        <Row>

          <Col md={4}>
            <Card className="dashbord-card">
              <Card.Body>
                <Card.Title>Total</Card.Title>
                <h2>{todos.length}</h2>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="dashbord-card">
              <Card.Body>
                <Card.Title>Completed</Card.Title>

                <h2>
                  {todos.filter((todo) => todo.completed).length}
                </h2>

              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="dashbord-card">
              <Card.Body>
                <Card.Title>Uncompleted</Card.Title>

                <h2>
                  {todos.filter((todo) => !todo.completed).length}
                </h2>

              </Card.Body>
            </Card>
          </Col>

        </Row>

      </Container>

      <br />
      <ToDoList todos={todos} handleSelect={handleSelect} handleDelete={handleDelete} handleCompleted={handleCompleted} />
    </>
  )
};

export default App;