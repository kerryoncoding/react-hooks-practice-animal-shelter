import React from "react";

function Pet({item}) {
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {(item.gender == "female") ? '♀ ' : '♂ '}
          {item.name}
        </span>
        <div className="meta">
          <span className="date">{item.type}</span>
        </div>
        <div className="description">
          <p>Age: {item.age}</p>
          <p>Weight: {item.weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className="ui disabled button">Already adopted</button>
        <button className="ui primary button">Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;