import React from "react"
import TodoItem from './Todoitem'
import todosData from "./todosData"



// old could still work
// function TodoItem(props){
//   return (
//     <div>
//       <input 
//         type="checkbox" 
//         checked={props.item.completed} 
//         onChange={() => props.handleChange(props.item.id)}/>
//       <p>{props.item.text}</p>
//     </div> 
//   )
// }

// new still works
// class TodoItem extends React.Component {
//   // takes in props
//   // constructor() {
//   //   super()
//   // }
//   render(){
//     return (
//       <div>
//         <input 
//           type="checkbox" 
//           checked={this.props.item.completed} 
//           onChange={() => this.props.handleChange(this.props.item.id)}/>
//         <p>{this.props.item.text}</p>
//       </div> 
//     )
//   }
// }

class MyInfo extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
    // NEED THIS TO CHANGE STATE
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                // loops through all prevState.todos's data and calls each instance todo
                // if the current todo.id matches the id passed in handleChange then flip it
                if (todo.id === id) {
                    // flips it
                    // console.log('changed', id, todo.completed)
                    todo.completed = !todo.completed;
                    // console.log('changed', id, todo.completed)
                }
                return todo;
            })
            console.log('changed updates', id, updatedTodos)
            return {
                todos: updatedTodos
            }
        })
    }


    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
        handleChange={this.handleChange}/>)
        return (
        // className instead of class for css
        <div className="todo-check">
            <h1>Edgar Munoz</h1>
            {todoItems}
        </div>
        )
    }
}

export default MyInfo;