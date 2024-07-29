"use client";

import React, { useState, useEffect } from "react";

export default function Todo() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const todoList = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      // Assigning a variable and turning the response into JSON
      const json = await response.json();

      // logging the JSON
      console.log(json);

      setTodo(json);
    };

    todoList();
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <h1>Todo</h1>
      {todo ? (
        <div>
          <p>UserId: {todo.userId}</p>
          <p>Id: {todo.id}</p>
          <p>Title: {todo.title}</p>
          <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

// always make sure you're using await
