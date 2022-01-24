import React from "react"
//import ReactDOM from "react"

function Joke(props) {
    return (
        <div className="joke">
            <h3 style={{color:'#990392'}}>{props.joke.question}</h3>
            <p style={{color:'#240322', background:'#f084ea'}}>{props.joke.punchLine}</p>
            <br/>
        </div>
        
        )
  };


function Joker() {
    return (
        <div>
            <Joke 
                joke = {{
                    question : "Its hard to explain puns to kleptomaniacs because they always take things literaly",
                }}
            />
            <Joke 
                joke = {{
                    question : "What do you call a boomerang that won’t come back?",
                    punchLine : "A stick."
                }}
            />
            <Joke 
                joke = {{
                    question : "What does a cloud wear under his raincoat?",
                    punchLine : "Thunderwear"
                }}
            />
            <Joke 
                joke = {{
                    question : "Two pickles fell out of a jar onto the floor. What did one say to the other?",
                    punchLine : "Dill with it."
                }}
            />
            <Joke 
                joke = {{
                    question : "Why did Adele cross the road? To say hello from the other side.",
                }} 
            />
        </div>
    )
}

  export default Joker;