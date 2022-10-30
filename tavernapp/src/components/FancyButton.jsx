import React, { useState } from "react";

//---------------Gunvor-------------------------

export default function FancyButton(props) {    
    const key = `${props.id}-is-active`;

    const [active, setActive] = useState(
      JSON.parse(localStorage.getItem(key)) || false
    );

    const handleClick = () => {
      localStorage.setItem(key, !active);
      setActive(!active);
    };

    return (
      <div className="container">
        <button className={active ? "active" : "btn"} onClick={handleClick}>
          {active ? "Følger" : "Følg"}
        </button>
      </div>
    );
  }