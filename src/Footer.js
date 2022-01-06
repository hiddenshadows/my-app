import React from "react"
//import ReactDOM from "react"

function Cards(props) {
    return (
        <div>
            <img style={{width: "250px", height: "300px"}} src={props.contact.imgUrl} alt="Me"/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}


function Footer() {
    return (
        // double {{}}
        // outer ones denote js while inner ones denote object
        // in the future we will import this from JSON files which's contents are objects
        <div>
            <Cards 
                contact={{
                    name: "Edgar Munoz", 
                    imgUrl:"https://pbs.twimg.com/media/FHXixvTX0AQd7e9?format=png&name=900x900",
                    phone: "510",
                    email: "emunoz18@ucsc.edu"
                }}
            />
            <Cards 
                contact={{
                    name: "bob", 
                    imgUrl:"https://pbs.twimg.com/media/FGcaHebXsAMz3Zu?format=jpg&name=large",
                    phone: "510",
                    email: "booby@ucr.edu"
                }}
            />
            <footer>
                Footing
            </footer>
        </div>
        
    )
}

export default Footer;