import React from "react"
//import ReactDOM from "react"

function TodoItem(){
  return (
    <div>
      <input type="checkbox" />
      <p>Placeholder text here</p>
    </div> 
  )
}

function MyInfo() {
    return (
      // className instead of class for css
      <div className="todo-check">
        <h1>Edgar Munoz</h1>

        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
  
  
      </div>
      
    )
  };

  export default MyInfo;