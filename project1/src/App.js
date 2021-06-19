
import React from 'react';
import "./App.css";
import ColorPicker from "./compoments/ColorPicker";
import Reset from "./compoments/Reset";
import SizeSeting from "./compoments/SizeSeting";
import Result from "./compoments/Result";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      color : 'red',
      fontSize : 12
    }
  }
  onSetColor = (params) =>{
    this.setState({
      color: params
    });
  }
  onChangeSize = (value)=>{
    if(this.state.fontSize + value >=8 && this.state.fontSize + value <=36) {
      this.setState({
        fontSize : this.state.fontSize + value
      });
    }
  }
  onSettingDefault=(value)=>{
    console.log(value);
    if(value){
      this.setState({
        color : 'red',
        fontSize : 12
      });
    }
  }
  render(){
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color= {this.state.color} onReceiveColor={this.onSetColor}/>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
           <SizeSeting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize}/>
            <Reset onSettingDefault={this.onSettingDefault}/>
          </div>
            <Result color={this.state.color} 
                    fontSize={this.state.fontSize}/>
        </div>
      </div>
    );
  }
  
}

export default App;
