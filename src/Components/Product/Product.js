import React, {Component} from 'react'

class Product extends Component {

    render() {
        // console.log(this.props)
        return(
            <div>
                <img src={this.props.image} alt='https://douglascuddletoy.com/wp-content/uploads/2018/11/2374-2.jpg'/>
                <span>{this.props.name}</span>
                <span>{`$${this.props.price}`}</span>
                <button onClick= {() => this.props.updateEdit(this.props.id)}>Edit</button>
                <button onClick = {() => this.props.deleteFN(this.props.id)}>Delete</button>
            </div>
        )
    }
}

export default Product