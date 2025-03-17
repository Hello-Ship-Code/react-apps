import React, { useEffect, useState } from "react"

import { ButtonNav } from "../components/common/button";
import { HeadingTag } from "../components/html-element-reference/text-content/heading-tag";

export type userInputHandleProps = {
  text: string;
};

export const TodoApp: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [todoList, setTodoList] = useState<userInputHandleProps[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem('todo-list')
    try {
      if (savedData) {
        const parsedData = JSON.parse(savedData)

        if (Array.isArray(parsedData) && parsedData.every(item => typeof item.text === 'string')) {
          setTodoList(parsedData)
        } else {
          localStorage.removeItem('todo-list')
          alert("Invalid Data")
        }
      }
    } catch (error) {
      localStorage.removeItem('todo-list')
      alert(`Error loading saved data. LocalStorage has been reset ${error}`)
    }
  }, [])

  useEffect(() => {
    if (todoList.length > 0) { localStorage.setItem('todo-list', JSON.stringify(todoList)) }
  }, [todoList])

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const clickedButton = () => {
    if (inputValue.trim() === "") return alert("Please enter a valid item");

    setTodoList([...todoList, { text: inputValue }]);
    setInputValue("");
  };

  const handleUserDelete = (index: number) => {
    setTodoList((prevList) => {
      const updatedData = prevList.filter((_, i) => i !== index);
      localStorage.setItem('todo-list', JSON.stringify(updatedData)); // Immediate update
      return updatedData;
    });
  }

  return (
    <>
      <div className="app-bar-fix hero-bg hero-center p-6">
        <HeadingTag className="p-4 text-4xl">Todo List</HeadingTag>

        <input
          type="text"
          value={inputValue}
          className="p-3 w-64 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add your item..."
          onChange={handleUserInput}
        />

        <ButtonNav
          type="submit"
          variant="primary-btn"
          size="medium"
          text="Add me"
          onClick={clickedButton}
          className="w-64 mt-3"
        />

        {todoList.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {todoList.map((item, index) => (
              <li key={index} className="text-white-500 text-lg bg-blue-800 p-2 rounded-md flex justify-between items-center">
                ✅ {item.text}

                < ButtonNav
                  type="reset"
                  text="❌"
                  variant="danger-btn"
                  size="small"
                  onClick={() => handleUserDelete(index)}
                />

              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white text-lg mt-4">Please add items...</p>
        )}
      </div>
    </>
  );
};