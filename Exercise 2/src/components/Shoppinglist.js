import React from 'react';

export default function ShoppingList(props) {
  return <div>
    <ul>      
        {
            props.listItems.map((item, index) => {       
              return <li className="Shoppinglistitems" key={index}> { item.qty } { item.value }  </li>                         
            })
        }
    </ul> 
  </div>;
}