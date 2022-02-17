import React from "react"

const todosData = [
    {
      id: 1,
      text: "Take out the trash",
      completed: true
    },
    {
      id: 2,
      text: "Grocery shopping",
      completed: false
    },
    {
      id: 3,
      text: "Clean gecko tank",
      completed: false
    },
    {
      id: 4,
      text: "Mow lawn",
      completed: true
    },
    {
      id: 5,
      text: "Catch up on TV show",
      completed: false
    }
  ]


//old still works
function TodoItem(props){
    const style = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
  return (
    <div>
      <input 
        type="checkbox" 
        checked={props.item.completed} 
        onChange={() => props.handleChange(props.item.id)}/>
      <p style={props.item.completed ? style : null}>{props.item.text}</p>
    </div> 
  )
}

// new same way as above, still works
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
    componentDidMount(){
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => console.log(data))
    }

    handleChange(id) {
        this.setState((prevState) => {
            const updatedTodos = prevState.todos.map(todo => {
                // loops through all prevState.todos's data and calls each instance todo
                // if the current todo.id matches the id passed in handleChange then flip it
                if (todo.id === id) {
                    // flips it
                    todo.completed = !todo.completed;
                }
                return todo;
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    // Built-in functions
    // componentDidMount() {}


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