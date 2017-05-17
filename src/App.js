import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Motion,spring,presets} from 'react-motion';

const widthSpring = {
  damping: 110,
  stiffnes: 20
}

class App extends Component {
  _w = screen.width;

  state = {
    start: false
  };

  constructor(props){
    super(props);
    setTimeout(() =>{
      this.setState({start:true})
    },500);
  };

  render() {
    return (
      <div className="App motions">
        <Motion defaultStyle={{x: this._w+150, w:100}}
          style={{x: spring(0,presets.noWobble),w: spring(50,widthSpring)}}>
          {value => {
            return (
              <div style={{
                transform: `translate(${value.x}px,0)`,
                width: `${value.w}%`
               }} className="blue">
                <div className="container">
                  <Motion defaultStyle={{o:0, y:70 }} style={{o:spring(this.state.start ? 1 : 0,widthSpring), y:spring(this.state.start ? 0 : 70,widthSpring)}}>
                    { value => {
                      return(
                        <p style={{
                          opacity: value.o,
                          transform: `translate(0,${value.y}px)`
                        }}>Join the tribe if you fit the job. <span>Work should never be work.</span></p>
                      )
                    }}
                  </Motion>

                </div>
              </div>
            )
          }}
        </Motion>

        <Motion defaultStyle={{o: 0}} style={{o: spring(this.state.start ? 1 : 0,widthSpring)}}>
          {value => <div style={{opacity: `${value.o}`}} className="right"></div> }
        </Motion>
      </div>
    );
  }
}

export default App;
