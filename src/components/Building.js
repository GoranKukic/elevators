import '../index';
import React, { useEffect, useState } from 'react';
import audio from '../assets/audio/bell.mp3';
import ElevatorContent from './ElevatorContent';

function Building({ floorSelector, floorSelectorThirdElevator }) {
  const [reset1, setReset1] = useState(false);
  const [reset2, setReset2] = useState(false);
  const [reset3, setReset3] = useState(false);

  // placing elements in array to write less code
  const windows = [];
  for (let i = 0; i <= 6; i++) {
    windows.push(<span className="window" key={i}></span>);
  }

  useEffect(() => {
    // initializing variables
    let elevatorToGo1 = null;
    let elevatorToGo2 = null;
    let moveToFloor = null;
    let playAudio = null;

    //selcting html elevator elements
    let elevator1 = document.querySelector('.elevator-1');
    let elevator2 = document.querySelector('.elevator-2');
    let elevator3 = document.querySelector('.elevator-3');

    // Checking if called floor is odd or even
    if (floorSelector % 2 === 0) {
      elevatorToGo2 = elevator2;
    } else {
      elevatorToGo1 = elevator1;
    }

    // checking if called floor is 0/ground level
    if (floorSelector === 0) {
      elevator1.style.bottom = 0;
      elevator2.style.bottom = 0;
    }

    if (floorSelectorThirdElevator === 0) {
      elevator3.style.bottom = 0;
    }

    //console.dir(elevatorToGo); - consol log DOM element of elevator

    // calculation for changing absolute position in %
    moveToFloor = floorSelector * 9 + '%';
    let moveToFloorThirdElevator = floorSelectorThirdElevator * 9 + '%';
    //console.log(moveToFloorThirdElevator)

    //function for playing sound
    playAudio = () => {
      new Audio(audio).play();
    };

    // custom state that is true if elevators are changing position (5 seconds), else is false
    if (floorSelector && elevatorToGo1) {
      setReset1(true);
      elevatorToGo1.style.bottom = moveToFloor;
      setTimeout(() => {
        setReset1(false);
        playAudio();
      }, 5000);
    } else if (floorSelector && elevatorToGo2) {
      setReset2(true);
      elevatorToGo2.style.bottom = moveToFloor;
      setTimeout(() => {
        setReset2(false);
        playAudio();
      }, 5000);
    }

    // same state but for third elevator
    else if (floorSelectorThirdElevator && elevator3) {
      setReset3(true);
      elevator3.style.bottom = moveToFloorThirdElevator;
      setTimeout(() => {
        setReset3(false);
        playAudio();
      }, 5000);
    }

    //Reseting position to ground level of elevator1 and elevator2  20 sedonds after state is changded
    const timer = window.setInterval(() => {
      elevator1.style.bottom = 0;
      elevator2.style.bottom = 0;
      elevator3.style.bottom = 0;
    }, 10000);
    return () => {
      window.clearInterval(timer);
    };
  }, [floorSelector, floorSelectorThirdElevator]); // <- If the variable updates, the effect will run again:

  return (
    <div className="building-wrapper">
      <div className="roof">
        <h2>Elevators</h2>
      </div>
      <div className="elevators-wraper">
        <div className="elevator-container">
          <div
            className={`elevator elevator-1 ${
              reset1 ? 'elevator-on-move' : ''
            }`}
          >
            <ElevatorContent />
          </div>
        </div>
        <div className="elevator-container">
          <div
            className={`elevator elevator-2 ${
              reset2 ? 'elevator-on-move' : ''
            }`}
          >
            <ElevatorContent />
          </div>
        </div>
        <div className="elevator-container">
          <div
            className={`elevator elevator-3 ${
              reset3 ? 'elevator-on-move' : ''
            }`}
          >
            <ElevatorContent />
          </div>
        </div>
      </div>

      <div className="flors-wrapper">
        <div className="floor floor-g">
          <p>G</p>
          {windows}
        </div>
        <div className="floor floor-1">
          <p>1</p>
          {windows}
        </div>
        <div className="floor floor-2">
          <p>2</p>
          {windows}
        </div>
        <div className="floor floor-3">
          <p>3</p>
          {windows}
        </div>
        <div className="floor floor-4">
          <p>4</p>
          {windows}
        </div>
        <div className="floor floor-5">
          <p>5</p>
          {windows}
        </div>
        <div className="floor floor-6">
          <p>6</p>
          {windows}
        </div>
        <div className="floor floor-7">
          <p>7</p>
          {windows}
        </div>
        <div className="floor floor-8">
          <p>8</p>
          {windows}
        </div>
        <div className="floor floor-9">
          <p>9</p>
          {windows}
        </div>
        <div className="floor floor-10">
          <p>10</p>
          {windows}
        </div>
      </div>
    </div>
  );
}

export default Building;
