import React from 'react';
import '../index';

function Handler({ setFloorSelector }) {
  const onButtonClick = (floor) => {
    setFloorSelector(floor);

    // calling function for changing display text with floor value as argument
    displayChange(floor);

    // timer for function for resetig display text to default
    const display = document.querySelector('.display');
    setTimeout(() => (display.innerHTML = `Stand by`), 5000);

    setTimeout(() => setFloorSelector(null), 5000);
  };

  // function for changing display text
  const displayChange = (floor) => {
    const display = document.querySelector('.display');
    display.innerHTML = `Going to level ${floor}`;
  };

  return (
    <div className="handler">
      <div className="display">Stand by</div>
      <div className="inscription">
        <h3>Here you call elevator 1 for odd and elevator 2 for even floors</h3>
      </div>
      <div className="buttons">
        <div className="btn-container bottom">
          <button
            className="btn-floor"
            onClick={() => {
              onButtonClick(0);
            }}
          >
            G
          </button>
        </div>
        <div className="btn-container floor">
          <button className="btn-floor floor" onClick={() => onButtonClick(1)}>
            1
          </button>
        </div>
        <div className="btn-container floor">
          <button className="btn-floor floor" onClick={() => onButtonClick(2)}>
            2
          </button>
        </div>
        <div className="btn-container floor">
          <button className="btn-floor floor" onClick={() => onButtonClick(3)}>
            3
          </button>
        </div>
        <div className="btn-container floor">
          <button className="btn-floor floor" onClick={() => onButtonClick(4)}>
            4
          </button>
        </div>
        <div className="btn-container floor">
          <button className="btn-floor floor" onClick={() => onButtonClick(5)}>
            5
          </button>
        </div>
        <div className="btn-container floor">
          <button className="btn-floor floor" onClick={() => onButtonClick(6)}>
            6
          </button>
        </div>
        <div className="btn-container floor">
          <button className="btn-floor floor" onClick={() => onButtonClick(7)}>
            7
          </button>
        </div>
        <div className="btn-container floor">
          <button className="btn-floor floor" onClick={() => onButtonClick(8)}>
            8
          </button>
        </div>
        <div className="btn-container floor">
          <button className="btn-floor floor" onClick={() => onButtonClick(9)}>
            9
          </button>
        </div>
        <div className="btn-container floor">
          <button className="btn-floor floor" onClick={() => onButtonClick(10)}>
            10
          </button>
        </div>
      </div>
    </div>
  );
}

export default Handler;
