// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList"; 
import { TodoSearch } from "./TodoSearch";
import { TodoButton } from "./TodoButton";
import { TodoItem } from "./TodoItem";

function App() {

  const todos = [
    {text: 'Cortar cebolla', completed: true},
    {text: 'react', completed: false},
    {text: 'llorar', completed: false}
  ]
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const [todosTodo,setTodosTodo] = React.useState([]);
  const [searchValue,setSearchValue] = React.useState('');

  let searchedTodos = [];

  if(!searchValue.length >= 1 )
  {
    searchedTodos = todos;
  }
  else{

    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
    
  }
  
  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos}/>      
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
          {searchedTodos.map(todo => ( <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
      </TodoList>     
      <TodoButton/>     
    </React.Fragment>
    
  );
}

export default App;
