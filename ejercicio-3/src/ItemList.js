import React from 'react';
import Item from './Item';
import './App.css';


class ItemList extends React.Component {



  render() {
    const items = this.props.items;

    return (
      <React.Fragment>
     
        <ul className="item-list">
          {items.map((list) => {
            return (
                <li>
                  <Item
                    name={list.name}
                    description={list.description}
                    quantity={list.quantity}
                    category={list.category}
                    price={list.price}
                  />
                </li>
            )
          })}
        </ul>
        </React.Fragment>
    )}
}

export default ItemList;