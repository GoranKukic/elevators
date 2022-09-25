import { useState } from 'react';
import '../index';
import Building from './Building';
import Handler from './Handler';
import Handler2 from './Handler2';

function App() {
  const [floorSelector, setFloorSelector] = useState(0);

  const [floorSelectorThirdElevator, setFloorSelectorThirdElevator] =
    useState(0);

  return (
    <div id="root">
      <Handler setFloorSelector={setFloorSelector} />
      <Building
        floorSelector={floorSelector}
        floorSelectorThirdElevator={floorSelectorThirdElevator}
      />
      <Handler2 setFloorSelectorThirdElevator={setFloorSelectorThirdElevator} />
    </div>
  );
}

export default App;
