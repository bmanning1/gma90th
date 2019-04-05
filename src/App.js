import React, { Component } from 'react';
import './App.css';
import gma from './static/gma.jpg';
import gmaVid from './static/gma.MOV';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { PG: true };
        this.togglePGmode = this.togglePGmode.bind(this);
     }

     componentDidMount() {
         document.body.classList.add('frog');
     }

     togglePGmode() {
        if (this.state.PG) {
            document.body.classList.remove('frog');
            document.body.classList.add('danny');
        } else {
            document.body.classList.remove('danny');
            document.body.classList.add('frog');
        }
        this.setState({ PG: !this.state.PG });
     }

  render() {
    return (
      <div className="App">
         <div className="container">
        	<div className="title">
                HAPPY 90th
                <br/>
                Grandma
        	</div>
         </div>

         <div className="buttonContainer">
             <button
                 className={`button ${this.state.PG ? 'frogButton' : 'dannyButton'}`}
                 onClick={this.togglePGmode}>
                 {this.state.PG ? 'Get rid of PG mode' : 'PG mode'}
             </button>
         </div>

         {this.state.PG ?
             <video muted src={gmaVid} type="video/mp4" className="gma" width="400" autoPlay loop></video>
             : <iframe className="dannyVid" src="https://www.youtube.com/embed/Nh3ikHS6grE?autoplay=1"></iframe>}

      </div>
    );
  }
}

export default App;
