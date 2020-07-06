import React from 'react';
import Product from '../Product/Product'

const Dashboard = props => {
    const mappedProducts = props.inventory.map((inventory, i) => (
        <Product
            key={i}
            id={inventory.id}
            image={inventory.image}
            name={inventory.name}
            price={inventory.price}
            deleteFN = {props.deleteProduct}
            updateEdit = {props.updateEdit}/>
    ))
 
    return (
        <div>
            {mappedProducts}
            {/* <Product deleteFN = {props.deleteProduct}/> */}
        </div>
    )
}

export default Dashboard;