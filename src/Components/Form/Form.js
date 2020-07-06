import React, {Component} from 'react'
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state= {
            imageInput: '',
            nameInput: '',
            priceInput: 0
        }
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleImageInput = (val) => {
        this.setState({imageInput: val})
    }

    handleNameInput = (val) => {
        this.setState({nameInput: val})
    }

    handlePriceInput = (val) => {
        this.setState({priceInput: val})
    }

    handleCancel() {
        this.setState({imageInput: '', nameInput: '', priceInput: 0})
    }

    handleCreateProduct = () => {
        axios.post('/api/product', {image: this.state.priceInput, name: this.state.nameInput, price: this.state.priceInput})
        .then(() => this.props.getInventory())
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <input
                    value = {this.state.imageInput}
                    onChange={e => this.handleImageInput(e.target.value)}/>
                <input
                    value = {this.state.nameInput}
                    onChange={e => this.handleNameInput(e.target.value)}/>
                <input
                    value = {this.state.priceInput}
                    onChange={e => this.handlePriceInput(e.target.value)}/>
                <button onClick={() => this.handleCancel()}>Cancel</button>
                <button onClick={this.handleCreateProduct}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form