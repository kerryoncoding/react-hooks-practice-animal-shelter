import React from "react";

import Pet from "./Pet";

function PetBrowser({list}) {

  console.log(list)


  const petList = list.map((item)=> {
    return (
      <Pet 
      key = {item.id}
      item = {item} />
    )
  } )

  return <div className="ui cards">{petList}</div>;
}

export default PetBrowser;