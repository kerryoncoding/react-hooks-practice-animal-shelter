import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [list, setList] = useState([]);
  const [filters, setFilters] = useState("all");
  const URL = "http://localhost:3001/pets"

  useEffect(()=> {
    fetch(URL)
    .then(res => res.json())
    .then(data => {setPets(data)
    setList(data)})
  }, [])

  function onChangeType(e){
    setFilters(e.target.value)
  }

  function onFindPetsClick(){
    let tempList = pets.map((item)=>item)
    let updatedList = []
    if (filters != "all") {
      updatedList = tempList.filter((item)=> item.type == filters)
    } else {
      updatedList = pets
    }
    setList(updatedList)
  }
  
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onFindPetsClick={onFindPetsClick} onChangeType={onChangeType} />
          </div>
          <div className="twelve wide column">
            <PetBrowser list={list} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;