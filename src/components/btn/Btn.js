import React, {useState} from 'react';
// import './App.css';

function Btn() {
  const [disabled, setDisabled] = useState(false);

  function handleClick() {
    setDisabled(!disabled);
  }

  return (
    <button data-testid="useless-button" disabled={disabled} onClick={handleClick}>
      Click Me
    </button>
  );
}

export default Btn;