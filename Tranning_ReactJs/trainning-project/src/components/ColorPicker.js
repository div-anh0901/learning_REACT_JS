import React from 'react';

class ColorPicker extends React.Component {
    constructor(props){
        super(props);
        this.state={
            colors : ['red','blue','green', '#cccc']
        }
    }


    showColor =(color)=>{
        return {
            background: color
        }
    }


    setColor=(color)=>{
        this.props.onSetColor(color);
    }
    
    render(){
        var elementColor = this.state.colors.map((color,index)=>{
            return <span 
                        key={index} 
                        style={this.showColor(color)}
                        onClick={()=>this.setColor(color)}
                    ></span>
        })
        
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        {elementColor}
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
   
}

export default ColorPicker;
