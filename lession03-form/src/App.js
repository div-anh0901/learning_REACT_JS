import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            rdLang: 'vn',
            sltGender: 1,
            chkbStatus: true
        }
    }
    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });

    }
    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container ">
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
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
                                        <label>Password : </label>
                                        <input type="password" className="form-control" name="password" onChange={this.onHandleChange} />
                                    </div>
                                    <div>
                                        <select className="form-control"
                                            name="sltGender"
                                            value={this.state.sltGender}
                                            onChange={this.onHandleSubmit}
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
                                            Tieng Anh
                                        </label><br />
                                        <label>
                                            <input type="radio"
                                                name="rdLang"
                                                value="vi"

                                                onChange={this.onHandleChange}
                                                checked={this.state.rdLang === "vn"}
                                            />
                                            Tieng viet
                                        </label><br />
                                    </div>
                                    <div className="chechbox">

                                        <input
                                            type="checkbox"
                                            name="chkbStatus"
                                            value={this.state.chkbStatus}
                                            onChange={this.onHandleChange}
                                            checked={this.state.chkbStatus}

                                        />

                                        <label>
                                            Trang Thai
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Lua Lai</button>
                                    <button type="reset" className="btn btn-default">Xoa Trang</button>
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
