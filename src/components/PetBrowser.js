import React from "react";

import Pet from "./Pet";

function PetBrowser({list, onAdoptPet}) {

  console.log(list)


  const petList = list.map((item)=> {
    return (
      <Pet 
      key = {item.id}
      item = {item}
      onAdoptPet={onAdoptPet} />
    )
  } )

  return <div className="ui cards">{petList}</div>;
}

export default PetBrowser;