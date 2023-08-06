import React from "react";

import Pet from "./Pet";

function PetBrowser({pets}) {

  console.log(pets)


  const petList = pets.map((item)=> item.id )

  return <div className="ui cards">{petList}E</div>;
}

export default PetBrowser;