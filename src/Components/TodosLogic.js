import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './Input';
import Todolist from './TodoList';

const TodosLogic = () => {
  function getInitialTodos() {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const deleteAllTodos = () => {
    setTodos([]); // Supprime toutes les tâches
  };

  const DltTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const Additem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <InputTodo Additem={Additem} />
      <Todolist
        todosprop={todos}
        handleChange={handleChange}
        DltTodo={DltTodo}
        setUpdate={setUpdate}
        deleteAllTodos={deleteAllTodos} // Transmet la fonction de suppression de toutes les tâches
      />
    </>
  );
};

export default TodosLogic;
