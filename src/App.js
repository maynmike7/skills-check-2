import React, {Component} from 'react';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      editId: null
    }
  }

  componentDidMount(){
    this.getInventory()
  }

  getInventory = () => {  
    axios.get('/api/inventory')
    .then(res => this.setState({inventory: res.data}))
    .catch(err => console.log(err))
  }

  deleteProduct = (id) => {
    axios.delete(`/api/product/${id}`)
    .then(() => this.getInventory())
    .catch(err => console.log(err))
  }

  updateEdit = (id) => {
    this.setState({editId: id})
    console.log(this.state.editId)
  }

  render() {
    return(
      <div>
        <Dashboard
          inventory={this.state.inventory}
          deleteProduct = {this.deleteProduct}
          updateEdit= {this.updateEdit}/>
        <Form
          getInventory = {this.getInventory}
          createProduct = {this.createProduct}/>
      </div>
    )
  }
}

export default App;
