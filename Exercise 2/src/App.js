import Shoppinglist from './components/Shoppinglist'
import Title from './components/Title'
import Buttons from './components/Buttons'
import React from "react";
import { useState } from "react";
import './App.css';

function App() {

    const [ shoppingListItems, setShoppingListItems  ] = useState([
        { id: 1, value: 'Milk', qty: 0},
        { id: 2, value: 'Bananas', qty: 0},
        { id: 3, value: 'Bread', qty: 0},
        { id: 4, value: 'Eggs', qty: 0}  
         
    ]);


    const addlistitems = (id) => {

      let random = Math.floor(Math.random() *30)
      let newShoppingListItems = [...shoppingListItems]
      let result = newShoppingListItems.findIndex(i => i.id === id)

        if (result !== -1) {
          let additions = {...newShoppingListItems[result]}
          additions.qty= additions.qty + random;
          newShoppingListItems[result] = additions;
          setShoppingListItems(newShoppingListItems)

        }
    }

    
  return (
    <div className="App">
      <div className="Shoppinglist">
        
          <Title/>
            <Shoppinglist listItems={shoppingListItems}/>
          <Buttons addRandom={addlistitems}/>
        
          
      </div>
    </div>
  );
}

export default App;