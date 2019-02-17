import React, { Component } from 'react';
import ItemList from './ItemList';
import CategoryButton from './components/CategoryButton';
import './App.css';


class App extends Component {
    constructor(props) {
      super(props)

      this.state = {
        items:[

          {
            name: "Cereales con chocolate",
            description: "Cereales rellenos de chocolate",
            quantity:2,
            category: "Cereales",
            price: 5
          },
          {
            name: "Hamburguesa con queso",
            quantity: 1,
            category: "Fast-food",
            price: 15
          },
          {
            name: "Agua mineral",
            description: "Agua de un charco del Himalaya",
            quantity: 2,
            category: "Bebida",
            price: 5
          },
          {
           
            name: "Coca-Cola",
            description: "Agua de un charco del Himalaya",
            quantity: 2,
            category: "Bebida",
            price: 8
      
          }
        ],
        cat: ''
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
      let cat = e.currentTarget.innerHTML;
      if(cat==='Todos'){
        cat=''
      }
      this.setState({
        cat:cat
      });
    }

  render() {
    return (
    <div>
       <CategoryButton category="Bebida" handleClick={this.handleClick} />
       <CategoryButton category="Cereales" handleClick={this.handleClick} />
       <CategoryButton category="Todos" handleClick={this.handleClick} />
      <ItemList items={this.state.items.filter(item=>item.category.includes(this.state.cat))} />
    </div> 
    )}
}

export default App;
