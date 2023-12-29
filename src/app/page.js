"use client";

import { useState, useRef } from "react";

const NewTodoForm = ({ addTodo: _addTodo }) => {
  const formInputNoRef = useRef(null);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const notice = () => {
    formInputNoRef.current.focus();

    if (newTodoTitle.trim().length == 0) {
      alert("할 일을 입력해주세요.");
      return;
    }
  };

  const addTodo = () => {
    if (newTodoTitle.trim().length == 0) return;

    const title = newTodoTitle.trim();
    _addTodo(title);
    setNewTodoTitle("");
  };

  return (
    <>
      <form
        className="flex gap-x-3 items-center"
        onSubmit={(e) => {
          e.preventDefault();
          notice();
        }}
      >
        <input
          ref={formInputNoRef}
          type="text"
          placeholder="새 할일을 입력해주세요."
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          className="input input-bordered"
        />
        <button className="btn btn-primary" onClick={addTodo}>
          할 일 추가
        </button>
      </form>
    </>
  );
};

const TodoListItem = ({
  todo,
  modifyTodo: _modifyTodo,
  removeTodo: _removeTodo,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState(todo.title);

  const enableEditMode = () => {
    setEditMode(true);
  };

  const cancelEditMode = () => {
    setEditMode(false);
    setNewTodoTitle(todo.title);
  };

  const modifyTodo = () => {
    if (newTodoTitle.trim().length == 0) return;

    _modifyTodo(todo.id, newTodoTitle.trim());
    setEditMode(false);
  };

  const removeTodo = () => {
    _removeTodo(todo.id);
  };

  return (
    <>
      <li className="flex items-center gap-x-3">
        <span className="badge badge-outline badge-primary">{todo.id} 번</span>
        {editMode ? (
          <>
            <input
              type="text"
              placeholder="할 일을 수정해주세요."
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
            />
            <button className="btn" onClick={modifyTodo}>
              수정 완료
            </button>
            <button className="btn" onClick={cancelEditMode}>
              수정 취소
            </button>
          </>
        ) : (
          <>
            <span>{todo.title}</span>
            <button className="btn" onClick={enableEditMode}>
              수정
            </button>
          </>
        )}
        <button className="btn" onClick={removeTodo}>
          삭제
        </button>
      </li>
    </>
  );
};

const TodoList = ({ todos, modifyTodo, removeTodo }) => {
  return (
    <>
      {todos.length == 0 ? (
        <h1>할 일 없니?</h1>
      ) : (
        <>
          <h1>새 할 일</h1>
          <nav>
            <ul>
              {todos.map((todo) => (
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                  modifyTodo={modifyTodo}
                  removeTodo={removeTodo}
                />
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [lastTodoId, setLastTodoId] = useState(0);

  const addTodo = (title) => {
    const id = lastTodoId + 1;

    const newTodo = {
      id,
      title,
    };
    setTodos([...todos, newTodo]);
    setLastTodoId(id);
  };

  const modifyTodo = (id, title) => {
    const newTodos = todos.map((todo) =>
      todo.id != id ? todo : { ...todo, title }
    );
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  };

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <TodoList todos={todos} modifyTodo={modifyTodo} removeTodo={removeTodo} />
    </>
  );
}
