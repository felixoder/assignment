import React, { useState } from "react";
import { Modal, ModalBody } from 'flowbite-react';
import "./App.css";

export default function App() {
  const [mouseHover, setMouseHover] = useState(false);

  const handleMouseEnter = () => {
    setMouseHover(true);
  };

  const handleMouseLeave = () => {
    setMouseHover(false);
  };

  return (
    <>
      <div className="container">
        <div className="box1">
          <h4>Business Case Study</h4>
        </div>

        <div className="Line"></div>
        <div className="VLine"></div>

        <div className="second-container">
          <div className="Lines1"></div>
          <div className="Lines1"></div>
          <div className="Lines1"></div>
          <div className="Lines1"></div>
          <div className="Lines1"></div>
        </div>
        <div className="box-container">
          <div className="box" style={{ backgroundColor: "blue" }}>
            <h4>Research</h4>
          </div>
          <div className="box" style={{ backgroundColor: "lightblue" }}>
            <h4 style={{ color: "black" }}>Planning</h4>
          </div>
          <div className="box" style={{ backgroundColor: "red" }}>
            <h4 style={{ color: "black" }}>Designing</h4>
          </div>
          <div className="box" style={{ backgroundColor: "pink" }}>
            <h4 style={{ color: "black" }}>Manufacturing</h4>
          </div>
          <div className="box" style={{ backgroundColor: "purple" }}>
            <h4 style={{ color: "black" }}>Sales/Marketing</h4>
          </div>
        </div>
        <div className="third-box">
          <div className="innerLines"></div>
          <div className="innerLines"></div>
          <div className="innerLines"></div>
          <div className="innerLines"></div>
          <div className="innerLines"></div>
        </div>
        <div className="third-box-container">
          <div className="my-box"></div>
          <div className="my-box"></div>
          <div className="my-box"></div>
          <div className="my-box"></div>
          <div className="my-box"></div>
        </div>
        <div className="part-box">
          <div className="new">
            <div className="part1" style={{ backgroundColor: 'blue' }}><h2 style={{ color: 'white' }}>External</h2></div>
            <div className="part1" style={{ backgroundColor: 'blue' }}><h2 style={{ color: 'white' }}>Internal</h2></div>
          </div>
          <div className="new">
            <div className="part1" style={{ backgroundColor: 'skyblue' }}><h2>PRD</h2></div>
            <div className="part1" style={{ backgroundColor: 'skyblue' }}><h2>Specs</h2></div>
          </div>
          <div className="new">
            <div className="part1" style={{ backgroundColor: 'red' }}><h2>Hardware</h2></div>
            <div className="part1" style={{ backgroundColor: 'red' }}><h2>Software</h2></div>
          </div>
          <div className="new">
            <div className="part1" style={{ backgroundColor: 'pink' }}><h2>Material</h2></div>
            <div className="part1" style={{ backgroundColor: 'pink' }}><h2>Production</h2></div>
          </div>
          <div className="new">
            <div className="part1" style={{ backgroundColor: 'purple' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><h2>Online</h2></div>
            <div className="part1" style={{ backgroundColor: 'purple' }}><h2>Dealership</h2></div>
          </div>
        </div>
        <div className="partLines"></div>
        <div className="big-box">
          <div className="small-box">
            <div className="main-box">
              <div className="part-main-box"><h4>B2C</h4></div>
              <div className="part-main-box"><h4>B2C</h4></div>
            </div>
          </div>
        </div>
        <div className="final-container-line">
          <div className="final"></div>
          <div className="final"></div>
        </div>
        <div className="main-block">
          <div className="block">
            <div className="block-box" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><h4>Online</h4></div>
            <div className="block-box"><h4>Interview</h4></div>
          </div>
          <div className="block">
            <div className="block-box"><h4>Public-Data</h4></div>
            <div className="block-box"><h4>Health</h4></div>
          </div>
          {mouseHover &&
            <div className="card-container">
              <div className="chart1">positive</div>
              <div className="chart2">Negative</div>
              <div className="chart3">Comments</div>
              <div className="main-div ">
                <div className="null">Total-Reviews</div>
                <div className="null">Positive-Reviews</div>
                <div className="null">Negative-Reviews</div>
                <div className="null">Comments</div>


              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
}
