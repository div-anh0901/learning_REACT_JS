import React from "react";

class SizeSeting extends React.Component {
    changeSize=(value)=>{
        this.props.onSetFontSize(value);
    }
   
    render(){
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : {this.props.fontSize} px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={()=> this.changeSize(-2)} >Giam</button>
                    <button type="button" className="btn btn-success" onClick={()=> this.changeSize(2)} >tang</button>

                </div>
            </div>
    );
    }
   
}

export default SizeSeting;
