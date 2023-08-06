import React, { useState } from "react";

function Filters() {

  const [petType, setPetType] = useState("all")

  function filterPet(e){
    console.log(e.target.value)
    setPetType(e.target.value)
  }


  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" onChange={filterPet}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;