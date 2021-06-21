import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      sltGender: 1,
      rdLang: "en",
      chkbStatus : true
    };
  }
  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Form
                </h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <label>Username : </label>
                    <input type="text" className="form-control" name="username" onChange={this.onHandleChange} />
                  </div>
                  <div className="form-group">
                    <label>Paaword : </label>
                    <input type="password" className="form-control" name="password" onChange={this.onHandleChange} />

                  </div>
                  <div>
                    <label>Gioi Tinh : </label>
                    <select
                      className="form-control"
                      name="sltGender"
                      value={this.state.sltGender}
                      onChange={this.onHandleChange}
                    >
                      <option value={0}>
                        Nu
                      </option>
                      <option value={1}>
                        Nam
                      </option>
                    </select>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio"
                        name="rdLang"
                        value="en"
                        onChange={this.onHandleChange}
                        checked={this.state.rdLang === "en"}
                      />
                      Tieng anh
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="rdLang"
                        value="vn"
                        onChange={this.onHandleChange}
                        checked={this.state.rdLang === "vn"}
                      />
                      Tieng Viet
                    </label>
                  </div>
                  <div>
                    <input 
                        type="checkbox"
                        name="chkbStatus"
                        value={this.state.chkbStatus}
                        onChange={this.onHandleChange}
                        checked={this.state.chkbStatus}
                        />
                        <label> Tran Thai</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Lua Lai</button>
                  <button type="reset" className="btn bnt-default" >Xoa Trang</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
