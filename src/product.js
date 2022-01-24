import React from 'react'
import products from './vschoolProducts'

function Data(props){
    return (
        <div>
            <h2>{props.product.name}</h2>
            {/* toLocaleString is a function look it up */}
            <p>{props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD" })} 
             - {props.product.description}</p>
        </div>
    )
}

// use of map too to import data from ./vschoolProducts
function Product(){
    const productComp = products.map((item) => <Data key={item.id} product={item}/>)
    return (
        <div>
            {productComp}
        </div>
    )
}


export default Product