import React, { Component } from 'react';
import './card.css';
class App extends Component
{
  state ={
     count1: 0,
         };
             Clickplus = () => {this.setState({ count1: this.state.count1 + 1});}
             clickminus = () => {this.setState({ count1: this.state.count1-1});}
             clickrefresh = () => {this.setState({count1: 0});}
          render()
            {
              return(
                 <div className="card">
                   <h1 className="num">{this.state.count1}</h1>
                    <button className="but" onClick={this.Clickplus} >+</button>
                    <button className="but" onClick={this.clickrefresh}>⟳</button>
                    <button className="but" onClick={this.clickminus}>-</button>
                 </div>
                )
            }
}
export default App;
