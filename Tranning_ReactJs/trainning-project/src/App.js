import React from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import SizeSeting from './components/SizeSeting';
import Result from './components/Result';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      color : 'red',
      fontSize: 12
    }
  }

  onSetColor=(color)=>{
       this.setState({
         color: color
       });
  }
  
  onSetFontSize=(value)=>{
      this.setState({
        fontSize : this.state.fontSize + value
      });
  }
  render(){
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color = {this.state.color} onSetColor = {this.onSetColor} />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
           <SizeSeting fontSize={this.state.fontSize} onSetFontSize={this.onSetFontSize} />
            <Reset/>
          </div>s
            <Result color ={this.state.color} fontSize={this.state.fontSize}  />
        </div>
      </div>
    )
  }
}

export default App;
