import React from 'react';

export default function Buttons(props) {
  return <div>
          <button className="button" onClick={ ()=> props.addRandom(1) }>Add Milk </button>
          <button className="button" onClick={ ()=> props.addRandom(2) }>Add Bananas</button>
          <button className="button" onClick={ ()=> props.addRandom(3) }>Add Bread</button>
          <button className="button" onClick={ ()=> props.addRandom(4) }>Add Eggs</button>
  </div>;
}