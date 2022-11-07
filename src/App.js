import React, { useState } from "react";
import InputArea from "./InputArea";
import TodoList from "./TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if(inputText!==""){
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
  
  }

  function deletion(id) {
    console.log(id);
setItems((prevalue)=>{
 return prevalue.filter((item,index)=>{
    return(index!==id)
  })
})


  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
  <InputArea handleChange={handleChange} addItem={addItem} value={inputText}/>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoList
              key={index}
              id={index}
              todoItem={todoItem}
              del={deletion}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

