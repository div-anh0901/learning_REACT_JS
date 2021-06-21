import React from 'react';

class Reset extends React.Component {
  onResetDefault=()=>{
    this.props.onSettingDefault(true);
  }
  render() {
    return (
      <div>
        <button type="button" className="bnt btn-primary" onClick={ this.onResetDefault}>reset</button>
      </div>
    )
  }

}

export default Reset;
